# Publishing Guide

This document outlines the steps to publish `@midaz/console-layout` to npm.

## Prerequisites

1. **NPM Account**: Ensure you have access to publish under the `@midaz` scope
2. **Authentication**: Login to npm: `npm login`
3. **Build Verification**: Ensure the package builds successfully

## Pre-publish Checklist

### 1. Version Check

- [ ] Update version in `package.json` if needed
- [ ] Update version in `CHANGELOG.md`
- [ ] Update version references in documentation

### 2. Build Verification

```bash
npm run build
```

Verify output:

- [ ] `dist/index.mjs` (ESM ~31KB)
- [ ] `dist/index.js` (CJS ~40KB)
- [ ] `dist/index.css` (CSS ~16KB)
- [ ] `dist/index.d.ts` (Types ~23KB)

### 3. Documentation Check

- [ ] README.md is up to date
- [ ] CHANGELOG.md includes all changes
- [ ] API documentation is complete
- [ ] Examples work correctly

### 4. Dependencies Check

```bash
npm audit
npm outdated
```

### 5. Test Application

```bash
cd test-app
npm install
npm run dev
```

Verify:

- [ ] Both ConsoleLayout and SimpleConsoleLayout work
- [ ] All navigation functions correctly
- [ ] Sidebar collapse/expand works
- [ ] Organization switcher works
- [ ] All dropdowns function properly

## Publishing Steps

### 1. Clean Build

```bash
npm run build
```

### 2. Package Contents Check

```bash
npm pack --dry-run
```

Verify the package includes:

- [ ] `dist/` directory with all build outputs
- [ ] `package.json`
- [ ] `README.md`
- [ ] `CHANGELOG.md`
- [ ] `LICENSE` (if applicable)

### 3. Publish to NPM

```bash
npm publish --access public
```

For beta/alpha releases:

```bash
npm publish --tag beta --access public
npm publish --tag alpha --access public
```

### 4. Verify Publication

```bash
npm view @midaz/console-layout
```

Check:

- [ ] Version is correct
- [ ] Files are included
- [ ] Dependencies are correct

## Post-publish Steps

### 1. Test Installation

Create a new project and test installation:

```bash
mkdir test-install
cd test-install
npm init -y
npm install @midaz/console-layout
```

### 2. Update Documentation

- [ ] Update any external documentation
- [ ] Update plugin development guides
- [ ] Notify relevant teams

### 3. Create Git Tag

```bash
git tag v0.1.0
git push origin v0.1.0
```

### 4. Create GitHub Release

1. Go to GitHub repository
2. Create new release with tag `v0.1.0`
3. Include changelog content
4. Attach any relevant assets

## Version Management

### Semantic Versioning

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backwards compatible
- **PATCH** (0.1.1): Bug fixes, backwards compatible

### Pre-release Versions

- **Alpha**: `0.1.0-alpha.1` - Early development
- **Beta**: `0.1.0-beta.1` - Feature complete, testing
- **RC**: `0.1.0-rc.1` - Release candidate

## Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Publish Permission Errors

```bash
# Verify login and organization access
npm whoami
npm org ls @midaz
```

#### Package Size Warnings

- Check bundle size: Current ~31KB ESM is acceptable
- Consider code splitting for larger packages
- Verify tree-shaking works correctly

### Rollback Procedure

If issues are discovered post-publish:

```bash
# Unpublish within 24 hours (if possible)
npm unpublish @midaz/console-layout@0.1.0

# Or deprecate the version
npm deprecate @midaz/console-layout@0.1.0 "Please use version X.X.X instead"
```

## Success Criteria

✅ Package publishes successfully  
✅ Installation works in fresh project  
✅ All exports are available  
✅ TypeScript definitions work  
✅ CSS imports work  
✅ No critical vulnerabilities  
✅ Documentation is accessible  
✅ Examples work as expected

## Next Steps After Publishing

1. **Update Console**: Install the package in the main console
2. **Update Plugins**: Migrate existing plugins to use the library
3. **Monitor Usage**: Track download statistics and feedback
4. **Bug Reports**: Monitor for issues and create patches as needed
5. **Feature Requests**: Plan future enhancements based on usage

## Useful Commands

```bash
# Check package info
npm view @midaz/console-layout

# Check download stats
npm view @midaz/console-layout downloads

# List all versions
npm view @midaz/console-layout versions --json

# Check bundle size
npm install -g bundlephobia-cli
bundlephobia @midaz/console-layout
```
