import { getCoverageSubproviderSingleton } from '@0xproject/dev-utils';

after('generate coverage report', async () => {
    if (process.env.SOLIDITY_COVERAGE) {
        const coverageSubprovider = getCoverageSubproviderSingleton();
        await coverageSubprovider.writeCoverageAsync();
    }
});
