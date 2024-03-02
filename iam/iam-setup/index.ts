import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";

// Create an Azure Resource Group
const resourceGroup = new resources.ResourceGroup("cyf-test-iam-workshop");

// Create an Azure resource (Storage Account)
const storageAccount = new storage.StorageAccount("cyftestiam174637", {
    resourceGroupName: resourceGroup.name,
    sku: {
        name: storage.SkuName.Standard_LRS,
    },
    kind: storage.Kind.StorageV2,
    allowBlobPublicAccess: true
});

const blobContainer = new storage.BlobContainer("images", {
    accountName: storageAccount.name,
    resourceGroupName: resourceGroup.name,
    publicAccess: "Blob"
});

// Export the primary key of the Storage Account
const storageAccountKeys = storage.listStorageAccountKeysOutput({
    resourceGroupName: resourceGroup.name,
    accountName: storageAccount.name
});

export const primaryStorageKey = storageAccountKeys.keys[0].value;
