const config = {
    appewriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appewriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appewriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appewriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appewriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config