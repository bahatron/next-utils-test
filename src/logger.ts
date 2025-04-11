import { Logger } from "@bahatron/utils";

export const logger = Logger.Create({
    pretty: true,
    id: () => {
        return typeof window !== "undefined"
            ? `path: ${window.location.pathname}`
            : "server";
    },
});
