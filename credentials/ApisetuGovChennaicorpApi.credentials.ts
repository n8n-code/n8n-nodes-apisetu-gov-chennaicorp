import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovChennaicorpApi implements ICredentialType {
        name = 'N8nDevApisetuGovChennaicorpApi';

        displayName = 'Apisetu Gov Chennaicorp API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovChennaicorp/apisetu-gov-chennaicorp.svg', dark: 'file:../nodes/ApisetuGovChennaicorp/apisetu-gov-chennaicorp.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/chennaicorp/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/chennaicorp/v3',
                        description: 'The base URL of your Apisetu Gov Chennaicorp API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
