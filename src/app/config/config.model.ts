export interface Config {
  production: boolean;
  apiUrl: string;
  auth: {
    authority: string;
    client_id: string;
    response_type: string;
    scope: string;
    redirect_uri: string;
    post_logout_redirect_uri: string;
    automaticSilentRenew: boolean;
    silent_redirect_uri: string;
    accessTokenExpiringNotificationTime: number;
    silentRequestTimeout: number;
  };
  dns: string;
}
