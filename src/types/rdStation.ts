export interface RDStationPayload {
    name: string,
    phone?: string,
    email?: string,
    company?: string,
    storeCount?: string,
    position?: string,
    city?: string,
    state?: string,
}

export interface RDStationRequest {
  event_type: 'CONVERSION';
  event_family: 'CDP';
  payload: RDStationPayload;
}

export interface RDStationResponse {
  event_uuid: string;
  event_identifier: string;
}
