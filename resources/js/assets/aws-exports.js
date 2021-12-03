const awsconfig = {
    "aws_project_region"            : "us-east-2",
    //"aws_project_region"          :"us-east-1",
    "aws_cognito_identity_pool_id"  : "us-east-2:fbddb4e3-788d-4d81-94d9-5fd572182a92",
    //"aws_cognito_identity_pool_id": "us-east-1:f6a3770c-c72e-4e44-bc77-f0b92c4982b3",
    "aws_cognito_region"            : "us-east-2",
    //"aws_cognito_region"          :"us-east-1",
    "aws_user_pools_id"             : "us-east-2_MF0zNVNmz",
    //"aws_user_pools_id"           : "us-east-1_iLN2E6rWR",
    "aws_user_pools_web_client_id"  : "3a4a04qova5cgr65csae67mgmd",
    //"aws_user_pools_web_client_id": "7r7q1cfpj3im5a4eahkrgee7vk",
    "oauth": {
        "domain": "resetauth.auth.us-east-2.amazoncognito.com",
        //"domain": "championstoken.auth.us-east-1.amazoncognito.com",
        /*"scope": [
            "phone"   , "email"   ,
            "openid"  , "profile" ,
            "aws.cognito.signin.user.admin"
        ],*/
        //"redirectSignOut" : "https://tokenchampions.com/home",
        "redirectSignOut" : "http://localhost:8000/",
        //"redirectSignIn"  : "https://tokenchampions.com/home",
        "redirectSignIn"  : "http://localhost:8000/",
        //"responseType" : "code"
        "responseType"    : "token"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_login_mechanisms": [
        "PREFERRED_USERNAME"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};

export default awsconfig;
