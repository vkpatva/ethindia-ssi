import got from "got"
import { HOST, PUSH_NOTIFICATION } from "./config"
import { logger } from "../utils/logger"

const host = HOST().PUSH_NOTIFICATION

class PushNotification {
    public async getTemplate(templateName: any) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.GET_NOTIFICATION_TEMPLATE}`
            const body = { templates: templateName }
            const response = await got(uri, {
                method: "POST",
                json: true,
                body,
            })
            return response.body.payload.data
        } catch (err) {
            console.log(err)
            return false
        }
    }

    public async prepareNotificationDt(
        template: any,
        toUsers: any,
        channelName: any,
        otherProperties: any,
        templateAttributes: any,
        params: any,
        avatar: any,
        payload: any = {},
        webRedirectAttributes: any = []
    ) {
        logger.info(__filename, "prepareNotificationDt", "No UUID", "call with ", template)
        // logger.info(__filename, 'prepareNotificationDt', 'toUsers : ', toUsers)
        return async (resolve: any, reject: any) => {
            try {
                const returnDt: any = []
                toUsers.forEach((user: any) => {
                    const channel = channelName
                    const entityId = user.id
                    logger.info(__filename, "prepareNotificationDt", "No UUID", "template.web_redirect ", template.web_redirect)
                    returnDt.push({
                        to_user_id: user.id,
                        entity_id: entityId,
                        to_user_app_type_id: otherProperties.toUserAppTypeId,
                        web_redirect_url: template.web_redirect,
                        language: user.preferredLanguage,
                        message: template[user.preferredLanguage], //helpers.compileTemplate(template[user.preferredLanguage], templateDataVariable),
                        channel_names: channel.names,
                        notification_preferences: { notification_active: 1 }, //user.notificationActive },
                        template: {
                            _id: template._id,
                            template_attributes: templateAttributes,
                            web_redirect_attributes: webRedirectAttributes,
                        },
                        avatar,
                        params,
                        payload,
                    })
                })
                return resolve(returnDt)
            } catch (err) {
                logger.info(__filename, "prepareNotificationDt", "No UUID", "Error time template data", template)
                logger.error(__filename, "prepareNotificationDt", "No UUID", "Error during prepare notification data", err)
                reject(err)
            }
        }
    }

    public async sendPushNotification(notificationDt: any) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.SEND_PUSH_NOTIFICATION}`
            const body = notificationDt
            const response = await got(uri, {
                method: "POST",
                json: true,
                body,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            return response.body
        } catch (err) {
            logger.error(__filename, "sendPushNotification", "No UUID", "Error During send push notificaiton ", err)
            throw err
        }
    }

    // get notification list from push notification service
    public async getNotificationList(reqBody: any) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.GET_NOTIFICATION_LIST}`
            const response = await got(uri, {
                method: "POST",
                json: true,
                body: reqBody,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            return response
        } catch (err) {
            logger.error(__filename, "getNotificationList", "No UUID", "Error during get notification list try error ", err)
            throw err
        }
    }

    // get notification badge count from push notification service
    public async getBadgeCount(reqBody: any = {}) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.GET_NOTIFICATION_BADGE_COUNT}`
            const response = await got(uri, {
                method: "POST",
                json: true,
                body: reqBody,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            return response
        } catch (err) {
            logger.error(__filename, "getNotificationList", "No UUID", "Error during get notification list try error ", err)
            throw err
        }
    }

    public async deleteNotification(reqBody: any) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.NOTIFICATION_DELETE}`
            const response = await got(uri, {
                method: "PUT",
                json: true,
                body: reqBody,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            return response
        } catch (err) {
            logger.error(__filename, "deleteNotification", "No UUID", "Error during hide notification try error ", err)
            throw err
        }
    }

    public async readAllNotification(reqBody: any) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.READ_ALL_NOTIFICATION}`
            const response = await got(uri, {
                method: "PUT",
                json: true,
                body: reqBody,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            return response
        } catch (err) {
            logger.error(__filename, "readAllNotification", "No UUID", "Error during read all notification try error ", err)
            throw err
        }
    }

    public async viewOrReadNotification(reqBody: any) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.VIEW_OR_READ_NOTIFICATION}`
            const response = await got(uri, {
                method: "PUT",
                json: true,
                body: reqBody,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            return response
        } catch (err) {
            logger.error(__filename, "viewOrReadNotification", "No UUID", "Error during view or read notification try error ", err)
            throw err
        }
    }

    public async unreadNotification(reqBody: any) {
        try {
            const uri = `${host}${PUSH_NOTIFICATION.UNREAD_NOTIFICATION}`
            const response = await got(uri, {
                method: "PUT",
                json: true,
                body: reqBody,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            return response
        } catch (err) {
            logger.error(__filename, "unreadNotification", "No UUID", "Error during un read notification try error ", err)
            throw err
        }
    }
}

export default new PushNotification()
