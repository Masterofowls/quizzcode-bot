# Biome Integration

This project has been integrated with [Biome](https://biomejs.dev/) for real-time linting and formatting.

## What is Biome?

Biome is a fast, modern toolchain for web projects that provides:
- **Ultra-fast linting** - 97% faster than ESLint
- **Formatting** - Compatible with Prettier
- **Zero configuration** - Works out of the box with sensible defaults
- **Real-time feedback** - Integrated with Vite for instant error detection

## Available Scripts

### Check (Lint + Format)
```bash
npm run biome:check
```
Runs both linting and formatting checks without modifying files.

### Fix Issues
```bash
npm run biome:fix
```
Automatically fixes linting issues and formats code.

### Format Only
```bash
npm run format
# or
npm run biome:format
```
Formats all files according to Biome configuration.

### Lint Only
```bash
npm run biome:lint
```
Runs only the linter without formatting.

## Real-time Linting

Biome is integrated into Vite via `vite-plugin-biome`. When you run `npm run dev`, Biome will:
- Check your code as you save files
- Display errors and warnings in the terminal
- Show issues in your browser console
- Provide instant feedback during development

## Configuration

The Biome configuration is in `biome.json` with the following features:

### Formatter Settings
- **Indent**: 2 spaces
- **Line width**: 100 characters
- **Quote style**: Single quotes (double for JSX)
- **Semicolons**: As needed (ASI-safe)
- **Trailing commas**: ES5 compatible

### Linter Rules
- Enabled recommended rules for React/TypeScript
- Accessibility checks for JSX
- Security warnings for dangerous patterns
- Code complexity detection
- Unused variable warnings
- Consistent code style enforcement

### Ignored Files
- `node_modules`
- `dist` and `build` directories
- Configuration files (handled separately)
- Public assets

## Editor Integration

### VS Code
Install the [Biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome):
```
ext install biomejs.biome
```

Add to your `.vscode/settings.json`:
```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```

### Other Editors
- **WebStorm/IntelliJ**: Built-in support available
- **Neovim**: Use `nvim-lspconfig` with Biome LSP
- **Sublime Text**: Install Biome package via Package Control

## Migration from ESLint

Both ESLint and Biome are currently installed. ESLint is still available via:
```bash
npm run lint
```

You can gradually migrate by:
1. Running `npm run biome:fix` to auto-fix common issues
2. Comparing outputs between ESLint and Biome
3. Eventually removing ESLint if Biome meets all needs

## Performance Comparison

Biome is significantly faster than traditional tools:
- **Linting**: ~97% faster than ESLint
- **Formatting**: ~35% faster than Prettier
- **Bundle size**: Single binary vs. multiple dependencies

## Customization

To customize Biome rules, edit `biome.json`:

```json
{
  "linter": {
    "rules": {
      "suspicious": {
        "noDoubleEquals": "error"
      }
    }
  }
}
```

See [Biome Rules Documentation](https://biomejs.dev/linter/rules/) for all available rules.

## CI/CD Integration

Add to your CI pipeline:

```yaml
- name: Run Biome checks
  run: npm run biome:check
```

This ensures code quality before merging.

## Troubleshooting

### Biome not running on save
- Ensure the Biome extension is installed and enabled
- Check that `editor.formatOnSave` is true in VS Code settings
- Restart your editor

### Conflicting with ESLint
- Both can coexist, but may show duplicate warnings
- Consider disabling ESLint auto-fix if using Biome formatting
- You can remove ESLint once fully migrated

### Configuration not applying
- Restart the dev server (`npm run dev`)
- Check `biome.json` syntax is valid
- Run `npx biome check --help` to verify installation

## Resources

- [Biome Official Documentation](https://biomejs.dev/)
- [Configuration Reference](https://biomejs.dev/reference/configuration/)
- [Migration Guide](https://biomejs.dev/guides/migrate-eslint-prettier/)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
