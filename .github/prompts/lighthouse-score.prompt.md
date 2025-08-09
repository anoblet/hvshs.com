1. Run the lighthouse script(`pnpm lighthouse`)
2. Analyze the report(`reports/lighthouse.json`)
3. Starting from simplest to most complex, implement ONE recommendation(do not remove any existing functionality)
4. Verify that everything works using Playwright, and make sure that the visual presentation of the site has not changed.
5. Commit your changes
6. Run `npm run deploy` wait for it to complete.

Repeat these steps until you have achieved a perfect lighthouse score.

- Use Playwright to check against the local site(https://localhost:4321)

- Keep in mind the lighthouse script is run against the live site(https://andrewnoblet.com). The project needs to be deployed before running the lighthouse script again.
