import * as assert from "assert";
import * as nconf from "nconf";
import * as path from "path";
import * as supertest from "supertest";
import * as app from "../../alfred/app";

const defaultConfig = nconf.file(path.join(__dirname, "../../../config.json")).use("memory");

describe("Routerlicious", () => {
    describe("Alfred", () => {
        describe("Server", () => {
            let testServer: supertest.SuperTest<supertest.Test>;

            beforeEach(() => {
                const alfred = app.create(defaultConfig, null, null);
                testServer = supertest(alfred);
            });

            it("constructor", () => {
                assert.ok(true);
            });
        });
    });
});
