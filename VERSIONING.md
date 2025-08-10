# Automatic Versioning System

This project now includes automatic versioning for deployments using:

- **wireit**: Task orchestration and dependency management
- **genaiscript**: Intelligent commit analysis and version bump determination

## How it works

1. **Commit Analysis**: The `version.genai.mts` script analyzes commits since the last version tag
2. **Version Determination**: Uses conventional commit standards to determine bump type:
   - `feat:` → Minor version bump
   - `fix:`, `chore:`, `docs:`, `style:`, `refactor:` → Patch version bump
   - `BREAKING CHANGE` or `!` → Major version bump
3. **Automatic Tagging**: Creates git tags and pushes changes
4. **Deployment Integration**: Runs before deployment via wireit dependency chain

## Usage

Simply run `pnpm run deploy` and versioning happens automatically based on your commits!

## Version History

- v0.2.0: Added automatic versioning system
- v0.1.1: Previous manual version
- v0.1.0: SPA conversion
- v0.0.2: Early iteration
- v0.0.1: Initial release
