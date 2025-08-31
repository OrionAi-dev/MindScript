declare function mindgraphql(): {
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

export { mindgraphql as default };
