import { DropLinks } from "@droplinks/sdk"


DropLinks.init("")

const options = {
    campaign: "HHTEST"
}

DropLinks.create(options).then((dropLink) => {
    const {id, claimCode, publicAddress, locked, claimLink, campaignId, claimed} = dropLink
    console.log("DropLink created", dropLink)
  }  
);