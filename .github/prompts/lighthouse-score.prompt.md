1. Run the lighthouse script(`pnpm lighthouse`)
2. Convert the report(`reports/lighthouse.json`) to markdown (`reports/lighthouse.md`). Analyze the markdown report.
3. Starting from simplest to most complex, implement ONE recommendation(do not remove any existing functionality)
4. Verify that everything works using Playwright, and make sure that the visual presentation of the site has not changed.
5. Commit your changes
6. Run `npm run deploy` wait for it to complete.

Repeat these steps until you have achieved a perfect lighthouse score.

- Use Playwright to check against the local site(https://localhost:4321)

- Keep in mind the lighthouse script is run against the live site(https://andrewnoblet.com). The project needs to be deployed before running the lighthouse script again.

- Do not remove ClientRouter or the ViewTransition API

- The interstitial and consent may not be neccessary and even detrimental. Keep it if possible, remove it if it negatively impacts the user experience.
