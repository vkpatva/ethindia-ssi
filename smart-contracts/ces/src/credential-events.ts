import {
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  claimRequestMade as claimRequestMadeEvent,
  claimResponse as claimResponseEvent,
  employmentVCIssued as employmentVCIssuedEvent,
  employmentVCVerified as employmentVCVerifiedEvent,
  issuranceVCIssued as issuranceVCIssuedEvent,
  issuranceVCVerified as issuranceVCVerifiedEvent,
  labVCIssued as labVCIssuedEvent,
  labVCVerified as labVCVerifiedEvent,
  nationalVCIssued as nationalVCIssuedEvent,
  nationalVCVerified as nationalVCVerifiedEvent
} from "../generated/CredentialEvents/CredentialEvents"
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
} from "../generated/schema"

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {
  let entity = new RequestFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.CredentialEvents_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestSent(event: RequestSentEvent): void {
  let entity = new RequestSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.CredentialEvents_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleclaimRequestMade(event: claimRequestMadeEvent): void {
  let entity = new claimRequestMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleclaimResponse(event: claimResponseEvent): void {
  let entity = new claimResponse(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.response = event.params.response
  entity.err = event.params.err

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleemploymentVCIssued(event: employmentVCIssuedEvent): void {
  let entity = new employmentVCIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleemploymentVCVerified(
  event: employmentVCVerifiedEvent
): void {
  let entity = new employmentVCVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleissuranceVCIssued(event: issuranceVCIssuedEvent): void {
  let entity = new issuranceVCIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleissuranceVCVerified(
  event: issuranceVCVerifiedEvent
): void {
  let entity = new issuranceVCVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlelabVCIssued(event: labVCIssuedEvent): void {
  let entity = new labVCIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlelabVCVerified(event: labVCVerifiedEvent): void {
  let entity = new labVCVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenationalVCIssued(event: nationalVCIssuedEvent): void {
  let entity = new nationalVCIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenationalVCVerified(event: nationalVCVerifiedEvent): void {
  let entity = new nationalVCVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
