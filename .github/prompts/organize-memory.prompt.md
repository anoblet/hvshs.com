```prompt
# Memory Organization Guidelines

## 🎯 Objective
Maintain a clean, organized, and efficient memory graph using the established 5-category entity system.

## 📋 Entity Categories

Restrict memory entity types to **only** these five categories:

### 1. **User**
- Personal information, preferences, and characteristics about Andrew Noblet
- Development philosophy, coding style preferences, and workflow requirements
- Personal interests, hobbies, and background information
- Communication preferences and interaction patterns
- **Examples**: "Prefers minimal, composable components", "Name is Andrew Noblet", "Enjoys Confucianism"

### 2. **System**
- Codebase architecture, technical decisions, and system-level observations
- Project history, implementation patterns, and code organization
- Framework choices, tooling decisions, and technical constraints
- Error patterns, validation results, and system behavior
- **Examples**: "Uses Astro + Lit architecture", "MCP servers configured", "No styling errors detected"

### 3. **Process**
- Development workflows, methodologies, and established procedures
- Automation scripts, build processes, and deployment patterns
- Quality assurance protocols and validation procedures
- **Examples**: "Uses Husky + lint-staged workflow", "Playwright MCP validation required", "Memory-first protocol"

### 4. **Task**
- Specific work items, implementations, and completed activities
- Feature requests, bug fixes, and maintenance tasks
- Project milestones, deliverables, and work progress
- Implementation details and task-specific outcomes
- **Examples**: "Updated pricing to $999", "Created blog post about minimalism", "Refactored navigation components"

### 5. **Environment**
- Development environment settings, configurations, and context
- Workspace-specific information and local setup details
- External dependencies and environment constraints
- **Examples**: "Uses pnpm for package management", "Linux development environment", "VS Code workspace"

## 🔧 Organization Workflow

### Phase 1: Assessment
1. **Read current memory graph** using `mcp_memory_read_graph`
2. **Identify misclassified entities** that don't fit the 5 categories
3. **Find duplicate observations** across entities
4. **Locate redundant or outdated information**

### Phase 2: Cleanup
1. **Merge duplicate entities** of the same type with overlapping information
2. **Consolidate similar observations** within entities
3. **Remove outdated observations** that are no longer relevant
4. **Delete empty or minimal-value entities**

### Phase 3: Reorganization
1. **Migrate observations** to correct entity categories
2. **Create missing entities** for orphaned observations
3. **Establish clear entity relationships** where appropriate
4. **Ensure each entity has meaningful, actionable observations**

### Phase 4: Validation
1. **Verify entity categorization** aligns with definitions
2. **Check observation quality** - specific, actionable, current
3. **Confirm no critical information** was lost during reorganization
4. **Test memory retrieval** for key user preferences and project context

## ✅ Quality Standards

### Good Observations:
- **Specific and actionable**: "Prefers pnpm over npm/yarn" vs. "Likes package managers"
- **Current and relevant**: Recent decisions and active preferences
- **Non-redundant**: Unique information not duplicated elsewhere
- **Context-rich**: Includes when/why information is important

### Remove/Merge:
- **Vague generalizations**: "User likes good code"
- **Outdated information**: Superseded decisions or old preferences
- **Duplicate content**: Same information in multiple entities
- **Minimal observations**: Single-word or trivial entries

## 🎯 Success Criteria

After organization, the memory graph should:
- ✅ Use only the 5 defined entity categories
- ✅ Contain no duplicate observations across entities
- ✅ Have clear, specific, actionable observations
- ✅ Maintain all critical user preferences and project context
- ✅ Support efficient retrieval of development guidance
- ✅ Align with Andrew's preferences for minimalism and organization

## 🔄 Maintenance Protocol

- **Before each interaction**: Check memory for relevant context
- **After each interaction**: Add new observations to appropriate entities
- **Weekly**: Review for duplicates and outdated information
- **Monthly**: Comprehensive cleanup and reorganization as needed

Execute this organization process systematically, prioritizing preservation of critical user preferences and project context while achieving maximum clarity and efficiency.
```
