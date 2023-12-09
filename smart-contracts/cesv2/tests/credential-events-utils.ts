import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferRequested,
  OwnershipTransferred,
  RequestFulfilled,
  RequestSent,
  claimRequestMade,
  claimResponse,
  employmentVCIssued,
  employmentVCVerified,
  issuranceVCIssued,
  issuranceVCVerified,
  labVCIssued,
  labVCVerified,
  nationalVCIssued,
  nationalVCVerified
} from "../generated/CredentialEvents/CredentialEvents"

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createRequestFulfilledEvent(id: Bytes): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestFulfilledEvent
}

export function createRequestSentEvent(id: Bytes): RequestSent {
  let requestSentEvent = changetype<RequestSent>(newMockEvent())

  requestSentEvent.parameters = new Array()

  requestSentEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestSentEvent
}

export function createclaimRequestMadeEvent(
  user: Address,
  requestId: Bytes
): claimRequestMade {
  let claimRequestMadeEvent = changetype<claimRequestMade>(newMockEvent())

  claimRequestMadeEvent.parameters = new Array()

  claimRequestMadeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  claimRequestMadeEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )

  return claimRequestMadeEvent
}

export function createclaimResponseEvent(
  requestId: Bytes,
  response: Bytes,
  err: Bytes
): claimResponse {
  let claimResponseEvent = changetype<claimResponse>(newMockEvent())

  claimResponseEvent.parameters = new Array()

  claimResponseEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  claimResponseEvent.parameters.push(
    new ethereum.EventParam("response", ethereum.Value.fromBytes(response))
  )
  claimResponseEvent.parameters.push(
    new ethereum.EventParam("err", ethereum.Value.fromBytes(err))
  )

  return claimResponseEvent
}

export function createemploymentVCIssuedEvent(
  user: Address
): employmentVCIssued {
  let employmentVcIssuedEvent = changetype<employmentVCIssued>(newMockEvent())

  employmentVcIssuedEvent.parameters = new Array()

  employmentVcIssuedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return employmentVcIssuedEvent
}

export function createemploymentVCVerifiedEvent(
  user: Address,
  reason: string
): employmentVCVerified {
  let employmentVcVerifiedEvent = changetype<employmentVCVerified>(
    newMockEvent()
  )

  employmentVcVerifiedEvent.parameters = new Array()

  employmentVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  employmentVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return employmentVcVerifiedEvent
}

export function createissuranceVCIssuedEvent(user: Address): issuranceVCIssued {
  let issuranceVcIssuedEvent = changetype<issuranceVCIssued>(newMockEvent())

  issuranceVcIssuedEvent.parameters = new Array()

  issuranceVcIssuedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return issuranceVcIssuedEvent
}

export function createissuranceVCVerifiedEvent(
  user: Address,
  reason: string
): issuranceVCVerified {
  let issuranceVcVerifiedEvent = changetype<issuranceVCVerified>(newMockEvent())

  issuranceVcVerifiedEvent.parameters = new Array()

  issuranceVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  issuranceVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return issuranceVcVerifiedEvent
}

export function createlabVCIssuedEvent(user: Address): labVCIssued {
  let labVcIssuedEvent = changetype<labVCIssued>(newMockEvent())

  labVcIssuedEvent.parameters = new Array()

  labVcIssuedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return labVcIssuedEvent
}

export function createlabVCVerifiedEvent(
  user: Address,
  reason: string
): labVCVerified {
  let labVcVerifiedEvent = changetype<labVCVerified>(newMockEvent())

  labVcVerifiedEvent.parameters = new Array()

  labVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  labVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return labVcVerifiedEvent
}

export function createnationalVCIssuedEvent(user: Address): nationalVCIssued {
  let nationalVcIssuedEvent = changetype<nationalVCIssued>(newMockEvent())

  nationalVcIssuedEvent.parameters = new Array()

  nationalVcIssuedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return nationalVcIssuedEvent
}

export function createnationalVCVerifiedEvent(
  user: Address,
  reason: string
): nationalVCVerified {
  let nationalVcVerifiedEvent = changetype<nationalVCVerified>(newMockEvent())

  nationalVcVerifiedEvent.parameters = new Array()

  nationalVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  nationalVcVerifiedEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return nationalVcVerifiedEvent
}
