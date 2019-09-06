import { App, Environment } from "@aws-cdk/core"
import { Stack } from "../lib/stack"

const id = process.env.FFS3_STACKNAME

const account: Environment = {
  account: process.env.FFS3_ACCOUNT,
  region: process.env.FFS3_REGION,
}

const app = new App()
new Stack(app, id, { env: account })
app.synth()
