import * as sdk from "node-appwrite"

const {
    API_KEY,
    DATABASE_ID,
    PROJECT_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENTS_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT:ENDPOINT
}=process.env

const Client=new sdk.Client()
Client
    .setEndpoint(ENDPOINT!)
    .setKey(API_KEY!)
    .setProject(PROJECT_ID!)

export const database=new sdk.Databases(Client)
export const storage=new sdk.Storage(Client)
export const messaging=new sdk.Messaging(Client)
export const user=new sdk.Users(Client)