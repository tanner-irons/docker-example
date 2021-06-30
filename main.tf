terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  backend "s3" {
    bucket  = "tanner-docker-example"
    key     = "terraform.tfstate"
    profile = "tfuser"
  }
}

provider "aws" {
  region = "us-east-1"
}