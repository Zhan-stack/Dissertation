export PROJECT_ID="linear-listener-324519"

gcloud config set project $PROJECT_ID

npm run build 

gcloud app deploy --project=$PROJECT_ID --quiet