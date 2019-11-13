export interface WorkJob<RESPONSE = any> {
    with(data): RESPONSE;
}

export interface WorksOperator {
    do<RESPONSE = any>(type: string): WorkJob<RESPONSE>;
}