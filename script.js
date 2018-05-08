"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mendixplatformsdk_1 = require("mendixplatformsdk");
const username = 'menno.dehaas@webflight.nl';
const apikey = 'dcf2c8c5-0036-47bf-a9ca-5a8a093f0af3';
const client = new mendixplatformsdk_1.MendixSdkClient(username, apikey);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const project = new mendixplatformsdk_1.Project(client, 'd1de7b22-4ad0-4a71-a1b8-f53f5baa97da', 'PointsCollector');
        const workingCopy = yield project.createWorkingCopy();
        const model = workingCopy.model();
        model.allMicroflows().forEach((element) => {
            element.load(loadedMicroflow => {
                loadedMicroflow.objectCollection.objects.forEach(object => {
                    console.log(object.structureTypeName);
                });
            });
        });
    });
}
main();
