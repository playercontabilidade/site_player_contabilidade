import { RDStationPayload } from '@/types/rdStation';

export const sendToRDStation = async (data: RDStationPayload) => {
  console.log(data);
  try {
    const url =
      'https://n8n.playercontabilidade.com/webhook/32b42307-0f1d-4cb6-a7b9-0c6cb0612983';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          name: data.name,
          contact_custom_fields: [
            {
              custom_field_id: '6852ff1cb682810014965370',
              value: data.company,
            },
            {
              custom_field_id: '6852ff8043934e00144f7fa9',
              value: data.storeCount,
            },
            {
              custom_field_id: '6852ffcd8769a6001a935bb2',
              value: data.position,
            },
            {
              custom_field_id: '685300024449cb0014f81e6b',
              value: data.city,
            },
            {
              custom_field_id: '6853002a8769a6001a935c0d',
              value: data.state,
            },
          ],
          emails: [
            {
              email: data.email,
            },
          ],
          phones: [
            {
              phone: data.phone,
            },
          ],
        },
      }),
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
      console.log('data:', data)
  } catch (error) {
    console.error('Erro ao enviar para RD Station:', error);
    throw error;
  }
};
