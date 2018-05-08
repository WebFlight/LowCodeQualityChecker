import { MendixSdkClient, OnlineWorkingCopy, Project } from 'mendixplatformsdk';
import { domainmodels, microflows } from 'mendixmodelsdk';

const username = 'menno.dehaas@webflight.nl';
const apikey = 'dcf2c8c5-0036-47bf-a9ca-5a8a093f0af3';
const client = new MendixSdkClient(username, apikey);

async function main() {
    const project = new Project(client, 'd1de7b22-4ad0-4a71-a1b8-f53f5baa97da', 'PointsCollector')
    const workingCopy = await project.createWorkingCopy();
    const model = workingCopy.model();
    
    model.allMicroflows().forEach((element) => {
        element.load(loadedMicroflow => {
            loadedMicroflow.objectCollection.objects.forEach(object => {
                console.log(object.structureTypeName);
            })
        })
    });
}

main();