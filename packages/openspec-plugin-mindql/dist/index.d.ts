declare function mindql(): {
    name: string;
    handles: string[];
    generate(file: {
        path: string;
        text: string;
    }, ctx: {
        outDir: string;
    }): Promise<{
        artifacts: string[];
    }>;
};

export { mindql as default };
