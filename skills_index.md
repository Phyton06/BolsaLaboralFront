# 📚 Skills Index — Inventario Completo

> Generado automáticamente · $(date +%Y-%m-%d)
> Total de skills encontrados: $(wc -l < /tmp/skill_files.txt)
> Skills únicos (sin duplicados): $(tail -n +2 /tmp/skills_data.csv | awk -F'|' '{print $1}' | sort -u | wc -l)

---

## 📍 Ubicaciones de Skills en el Sistema

| Ubicación | Cantidad | Propósito |
|-----------|----------|-----------|
| `/home/phyton/.gemini/antigravity/skills/` | 963 | Gemini CLI (antigravity) — colección principal |
| `/home/phyton/.agent/skills/` | 964 dirs | OpenCode/Antigravity — symlinked a antigravity |
| `/home/phyton/.config/opencode/skills/` | 14 | OpenCode — skills activos del proyecto |
| `/home/phyton/.cursor/skills/` | 11 | Cursor IDE — skills personalizados |
| `/home/phyton/.copilot/skills/` | 11 | GitHub Copilot — skills personalizados |
| `/home/phyton/.claude/skills/` | 11 | Claude Code — skills personalizados |
| `/home/phyton/.gemini/skills/` | 11 | Gemini CLI — skills personalizados |
| `/home/phyton/SIEstBackend/.agent/skills/` | 5 | Skills del proyecto SIEstBackend |
| `/home/phyton/clawd/skills/` | 1 | ClawdBot — skills |

---

## 🔥 Skills Activos (OpenCode / Proyecto Actual)

Estos son los skills que **actualmente están configurados** para usarse en el proyecto:

| Skill | Trigger | Ubicación |
|-------|---------|-----------|
| **go-testing** |   Trigger: When writing Go tests, using teatest, or adding test coverage. | `/home/phyton/.config/opencode/skills/go-testing/` |
| **php-flight** |   Trigger: When creating controllers, endpoints, or services with Flight PHP. | `/home/phyton/.config/opencode/skills/php-flight/` |
| **php-phinx** |   Trigger: When creating database migrations, modifying schema, or managing DB version control. | `/home/phyton/.config/opencode/skills/php-phinx/` |
| **sdd-apply** |   Trigger: When the orchestrator launches you to implement one or more tasks from a change. | `/home/phyton/.config/opencode/skills/sdd-apply/` |
| **sdd-archive** |   Trigger: When the orchestrator launches you to archive a change after implementation and verificat | `/home/phyton/.config/opencode/skills/sdd-archive/` |
| **sdd-design** |   Trigger: When the orchestrator launches you to write or update the technical design for a change. | `/home/phyton/.config/opencode/skills/sdd-design/` |
| **sdd-explore** |   Trigger: When the orchestrator launches you to think through a feature, investigate the codebase,  | `/home/phyton/.config/opencode/skills/sdd-explore/` |
| **sdd-init** |   Trigger: When user wants to initialize SDD in a project, or says "sdd init", "iniciar sdd", "opens | `/home/phyton/.config/opencode/skills/sdd-init/` |
| **sdd-propose** |   Trigger: When the orchestrator launches you to create or update a proposal for a change. | `/home/phyton/.config/opencode/skills/sdd-propose/` |
| **sdd-spec** |   Trigger: When the orchestrator launches you to write or update specs for a change. | `/home/phyton/.config/opencode/skills/sdd-spec/` |
| **sdd-tasks** |   Trigger: When the orchestrator launches you to create or update the task breakdown for a change. | `/home/phyton/.config/opencode/skills/sdd-tasks/` |
| **sdd-verify** |   Trigger: When the orchestrator launches you to verify a completed (or partially completed) change. | `/home/phyton/.config/opencode/skills/sdd-verify/` |
| **skill-creator** |   Trigger: When user asks to create a new skill, add agent instructions, or document patterns for AI | `/home/phyton/.config/opencode/skills/skill-creator/` |
| **zktec-adms** |   Trigger: When implementing endpoints to receive attendance logs from ZKTeco devices (SFACE900, etc | `/home/phyton/.config/opencode/skills/zktec-adms/` |

---

## 📂 Skills por Categoría

### 🏗️ Backend Development

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **bruno-api-tester** | "Experto en diseño; generación y validación de colecciones de Bruno API Client (.bru) para pruebas automatizadas de A | `/home/phyton/.agent/skills/bruno-api-tester` |
| **siest-backend-core** | "Reglas arquitectónicas y de desarrollo para el proyecto SIEstBackend (PHP 8+; Flight Framework; Dual DB)." | `/home/phyton/.agent/skills/siest-backend-core` |
| **java-lsp-tools** | Compiler-accurate Java code intelligence tools powered by the Java Language Server. ALWAYS load this skill when the work | `/home/phyton/.antigravity/extensions/vscjava.vscode-java-dependency-0.27.2-universal/resources/skills/java-lsp-tools` |
| **engram-server-api** | > | `/home/phyton/clawd/skills/atl/server-api` |
| **php-flight** | > | `/home/phyton/.config/opencode/skills/php-flight` |
| **php-phinx** | > | `/home/phyton/.config/opencode/skills/php-phinx` |
| **agent-framework-azure-ai-py** | "Build Azure AI Foundry agents using the Microsoft Agent Framework Python SDK (agent-framework-azure-ai). Use when creat | `/home/phyton/.gemini/antigravity/skills/agent-framework-azure-ai-py` |
| **ai-wrapper-product** | "Expert in building products that wrap AI APIs (OpenAI; Anthropic; etc.) into focused tools people will pay for. Not jus | `/home/phyton/.gemini/antigravity/skills/ai-wrapper-product` |
| **api-design-principles** | "Master REST and GraphQL API design principles to build intuitive; scalable; and maintainable APIs that delight develope | `/home/phyton/.gemini/antigravity/skills/api-design-principles` |
| **api-documentation-generator** | "Generate comprehensive; developer-friendly API documentation from code; including endpoints; parameters; examples; and  | `/home/phyton/.gemini/antigravity/skills/api-documentation-generator` |
| **api-documentation** | "API documentation workflow for generating OpenAPI specs; creating developer guides; and maintaining comprehensive API d | `/home/phyton/.gemini/antigravity/skills/api-documentation` |
| **api-documenter** | Master API documentation with OpenAPI 3.1; AI-powered tools; and modern developer experience practices. Create interacti | `/home/phyton/.gemini/antigravity/skills/api-documenter` |
| **api-fuzzing-bug-bounty** | "This skill should be used when the user asks to \"test API security\"; \"fuzz APIs\"; \"find IDOR vulnerabilities\"; \" | `/home/phyton/.gemini/antigravity/skills/api-fuzzing-bug-bounty` |
| **apify-actor-development** | "Develop; debug; and deploy Apify Actors - serverless cloud programs for web scraping; automation; and data processing.  | `/home/phyton/.gemini/antigravity/skills/apify-actor-development` |
| **apify-actorization** | "Convert existing projects into Apify Actors - serverless cloud programs. Actorize JavaScript/TypeScript (SDK with Actor | `/home/phyton/.gemini/antigravity/skills/apify-actorization` |
| **apify-audience-analysis** | Understand audience demographics; preferences; behavior patterns; and engagement quality across Facebook; Instagram; You | `/home/phyton/.gemini/antigravity/skills/apify-audience-analysis` |
| **apify-brand-reputation-monitoring** | "Track reviews; ratings; sentiment; and brand mentions across Google Maps; Booking.com; TripAdvisor; Facebook; Instagram | `/home/phyton/.gemini/antigravity/skills/apify-brand-reputation-monitoring` |
| **apify-competitor-intelligence** | Analyze competitor strategies; content; pricing; ads; and market positioning across Google Maps; Booking.com; Facebook;  | `/home/phyton/.gemini/antigravity/skills/apify-competitor-intelligence` |
| **apify-content-analytics** | Track engagement metrics; measure campaign ROI; and analyze content performance across Instagram; Facebook; YouTube; and | `/home/phyton/.gemini/antigravity/skills/apify-content-analytics` |
| **apify-ecommerce** | "Scrape e-commerce data for pricing intelligence; customer reviews; and seller discovery across Amazon; Walmart; eBay; I | `/home/phyton/.gemini/antigravity/skills/apify-ecommerce` |
| **apify-influencer-discovery** | Find and evaluate influencers for brand partnerships; verify authenticity; and track collaboration performance across In | `/home/phyton/.gemini/antigravity/skills/apify-influencer-discovery` |
| **apify-lead-generation** | "Generates B2B/B2C leads by scraping Google Maps; websites; Instagram; TikTok; Facebook; LinkedIn; YouTube; and Google S | `/home/phyton/.gemini/antigravity/skills/apify-lead-generation` |
| **apify-market-research** | Analyze market conditions; geographic opportunities; pricing; consumer behavior; and product validation across Google Ma | `/home/phyton/.gemini/antigravity/skills/apify-market-research` |
| **apify-trend-analysis** | Discover and track emerging trends across Google Trends; Instagram; Facebook; YouTube; and TikTok to inform content stra | `/home/phyton/.gemini/antigravity/skills/apify-trend-analysis` |
| **apify-ultimate-scraper** | "Universal AI-powered web scraper for any platform. Scrape data from Instagram; Facebook; TikTok; YouTube; Google Maps;  | `/home/phyton/.gemini/antigravity/skills/apify-ultimate-scraper` |
| **api-patterns** | "API design principles and decision-making. REST vs GraphQL vs tRPC selection; response formats; versioning; pagination. | `/home/phyton/.gemini/antigravity/skills/api-patterns` |
| **api-security-best-practices** | "Implement secure API design patterns including authentication; authorization; input validation; rate limiting; and prot | `/home/phyton/.gemini/antigravity/skills/api-security-best-practices` |
| **api-security-testing** | "API security testing workflow for REST and GraphQL APIs covering authentication; authorization; rate limiting; input va | `/home/phyton/.gemini/antigravity/skills/api-security-testing` |
| **api-testing-observability-api-mock** | "You are an API mocking expert specializing in realistic mock services for development; testing; and demos. Design mocks | `/home/phyton/.gemini/antigravity/skills/api-testing-observability-api-mock` |
| **appdeploy** | "Deploy web apps with backend APIs; database; and file storage. Use when the user asks to deploy or publish a website or | `/home/phyton/.gemini/antigravity/skills/appdeploy` |
| **application-performance-performance-optimization** | "Optimize end-to-end application performance with profiling; observability; and backend/frontend tuning. Use when coordi | `/home/phyton/.gemini/antigravity/skills/application-performance-performance-optimization` |
| **architecture-patterns** | "Implement proven backend architecture patterns including Clean Architecture; Hexagonal Architecture; and Domain-Driven  | `/home/phyton/.gemini/antigravity/skills/architecture-patterns` |
| **async-python-patterns** | "Master Python asyncio; concurrent programming; and async/await patterns for high-performance applications. Use when bui | `/home/phyton/.gemini/antigravity/skills/async-python-patterns` |
| **aws-serverless** | "Specialized skill for building production-ready serverless applications on AWS. Covers Lambda functions; API Gateway; D | `/home/phyton/.gemini/antigravity/skills/aws-serverless` |
| **azure-ai-agents-persistent-dotnet** | Azure AI Agents Persistent SDK for .NET. Low-level SDK for creating and managing AI agents with threads; messages; runs; | `/home/phyton/.gemini/antigravity/skills/azure-ai-agents-persistent-dotnet` |
| **azure-ai-agents-persistent-java** | Azure AI Agents Persistent SDK for Java. Low-level SDK for creating and managing AI agents with threads; messages; runs; | `/home/phyton/.gemini/antigravity/skills/azure-ai-agents-persistent-java` |
| **azure-ai-anomalydetector-java** | "Build anomaly detection applications with Azure AI Anomaly Detector SDK for Java. Use when implementing univariate/mult | `/home/phyton/.gemini/antigravity/skills/azure-ai-anomalydetector-java` |
| **azure-ai-contentsafety-java** | "Build content moderation applications with Azure AI Content Safety SDK for Java. Use when implementing text/image analy | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-java` |
| **azure-ai-contentsafety-py** | Azure AI Content Safety SDK for Python. Use for detecting harmful content in text and images with multi-severity classif | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-py` |
| **azure-ai-contentunderstanding-py** | Azure AI Content Understanding SDK for Python. Use for multimodal content extraction from documents; images; audio; and  | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentunderstanding-py` |
| **azure-ai-document-intelligence-dotnet** | Azure AI Document Intelligence SDK for .NET. Extract text; tables; and structured data from documents using prebuilt and | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-dotnet` |
| **azure-ai-formrecognizer-java** | "Build document analysis applications with Azure Document Intelligence (Form Recognizer) SDK for Java. Use when extracti | `/home/phyton/.gemini/antigravity/skills/azure-ai-formrecognizer-java` |
| **azure-ai-ml-py** | Azure Machine Learning SDK v2 for Python. Use for ML workspaces; jobs; models; datasets; compute; and pipelines. | `/home/phyton/.gemini/antigravity/skills/azure-ai-ml-py` |
| **azure-ai-openai-dotnet** | Azure OpenAI SDK for .NET. Client library for Azure OpenAI and OpenAI services. Use for chat completions; embeddings; im | `/home/phyton/.gemini/antigravity/skills/azure-ai-openai-dotnet` |
| **azure-ai-projects-dotnet** | Azure AI Projects SDK for .NET. High-level client for Azure AI Foundry projects including agents; connections; datasets; | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-dotnet` |
| **azure-ai-projects-java** | Azure AI Projects SDK for Java. High-level SDK for Azure AI Foundry project management including connections; datasets;  | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-java` |
| **azure-ai-projects-py** | "Build AI applications using the Azure AI Projects Python SDK (azure-ai-projects). Use when working with Foundry project | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-py` |
| **azure-ai-projects-ts** | "Build AI applications using Azure AI Projects SDK for JavaScript (@azure/ai-projects). Use when working with Foundry pr | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-ts` |
| **azure-ai-transcription-py** | Azure AI Transcription SDK for Python. Use for real-time and batch speech-to-text transcription with timestamps and diar | `/home/phyton/.gemini/antigravity/skills/azure-ai-transcription-py` |
| **azure-ai-translation-ts** | "Build translation applications using Azure Translation SDKs for JavaScript (@azure-rest/ai-translation-text; @azure-res | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-ts` |
| **azure-ai-vision-imageanalysis-java** | "Build image analysis applications with Azure AI Vision SDK for Java. Use when implementing image captioning; OCR text e | `/home/phyton/.gemini/antigravity/skills/azure-ai-vision-imageanalysis-java` |
| **azure-ai-voicelive-dotnet** | Azure AI Voice Live SDK for .NET. Build real-time voice AI applications with bidirectional WebSocket communication. | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-dotnet` |
| **azure-ai-voicelive-java** | Azure AI VoiceLive SDK for Java. Real-time bidirectional voice conversations with AI assistants using WebSocket. | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-java` |
| **azure-ai-voicelive-ts** | Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket co | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-ts` |
| **azure-appconfiguration-java** | Azure App Configuration SDK for Java. Centralized application configuration management with key-value settings; feature  | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-java` |
| **azure-appconfiguration-py** | Azure App Configuration SDK for Python. Use for centralized configuration management; feature flags; and dynamic setting | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-py` |
| **azure-appconfiguration-ts** | "Build applications using Azure App Configuration SDK for JavaScript (@azure/app-configuration). Use when working with c | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-ts` |
| **azure-communication-callautomation-java** | "Build call automation workflows with Azure Communication Services Call Automation Java SDK. Use when implementing IVR s | `/home/phyton/.gemini/antigravity/skills/azure-communication-callautomation-java` |
| **azure-communication-callingserver-java** | "Azure Communication Services CallingServer (legacy) Java SDK. Note - This SDK is deprecated. Use azure-communication-ca | `/home/phyton/.gemini/antigravity/skills/azure-communication-callingserver-java` |
| **azure-communication-chat-java** | "Build real-time chat applications with Azure Communication Services Chat Java SDK. Use when implementing chat threads;  | `/home/phyton/.gemini/antigravity/skills/azure-communication-chat-java` |

### 🎨 Frontend Development

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **siest-backend-core** | "Reglas arquitectónicas y de desarrollo para el proyecto SIEstBackend (PHP 8+; Flight Framework; Dual DB)." | `/home/phyton/.agent/skills/siest-backend-core` |
| **gentleman-bubbletea** | > | `/home/phyton/clawd/skills/atl/gentleman-bubbletea` |
| **engram-tui-quality** | > | `/home/phyton/clawd/skills/atl/tui-quality` |
| **engram-ui-elements** | > | `/home/phyton/clawd/skills/atl/ui-elements` |
| **00-andruia-consultant** | "Arquitecto de Soluciones Principal y Consultor Tecnológico de Andru.ia. Diagnostica y traza la hoja de ruta óptima pa | `/home/phyton/.gemini/antigravity/skills/00-andruia-consultant` |
| **10-andruia-skill-smith** | "Ingeniero de Sistemas de Andru.ia. Diseña; redacta y despliega nuevas habilidades (skills) dentro del repositorio sigu | `/home/phyton/.gemini/antigravity/skills/10-andruia-skill-smith` |
| **20-andruia-niche-intelligence** | "Estratega de Inteligencia de Dominio de Andru.ia. Analiza el nicho específico de un proyecto para inyectar conocimient | `/home/phyton/.gemini/antigravity/skills/20-andruia-niche-intelligence` |
| **3d-web-experience** | "Expert in building 3D experiences for the web - Three.js; React Three Fiber; Spline; WebGL; and interactive 3D scenes.  | `/home/phyton/.gemini/antigravity/skills/3d-web-experience` |
| **ab-test-setup** | "Structured guide for setting up A/B tests with mandatory gates for hypothesis; metrics; and execution readiness." | `/home/phyton/.gemini/antigravity/skills/ab-test-setup` |
| **agent-framework-azure-ai-py** | "Build Azure AI Foundry agents using the Microsoft Agent Framework Python SDK (agent-framework-azure-ai). Use when creat | `/home/phyton/.gemini/antigravity/skills/agent-framework-azure-ai-py` |
| **agent-manager-skill** | "Manage multiple local CLI agents via tmux sessions (start/stop/monitor/assign) with cron-friendly scheduling." | `/home/phyton/.gemini/antigravity/skills/agent-manager-skill` |
| **agents-v2-py** | "Build container-based Foundry Agents with Azure AI Projects SDK (ImageBasedHostedAgentDefinition). Use when creating ho | `/home/phyton/.gemini/antigravity/skills/agents-v2-py` |
| **agent-tool-builder** | "Tools are how AI agents interact with the world. A well-designed tool is the difference between an agent that works and | `/home/phyton/.gemini/antigravity/skills/agent-tool-builder` |
| **ai-agent-development** | "AI agent development workflow for building autonomous agents; multi-agent systems; and agent orchestration with CrewAI; | `/home/phyton/.gemini/antigravity/skills/ai-agent-development` |
| **ai-agents-architect** | "Expert in designing and building autonomous AI agents. Masters tool use; memory systems; planning strategies; and multi | `/home/phyton/.gemini/antigravity/skills/ai-agents-architect` |
| **ai-engineer** | Build production-ready LLM applications; advanced RAG systems; and intelligent agents. Implements vector search; multimo | `/home/phyton/.gemini/antigravity/skills/ai-engineer` |
| **ai-product** | Every product will be AI-powered. The question is whether you'll build it right or ship a demo that falls apart in produ | `/home/phyton/.gemini/antigravity/skills/ai-product` |
| **airflow-dag-patterns** | "Build production Apache Airflow DAGs with best practices for operators; sensors; testing; and deployment. Use when crea | `/home/phyton/.gemini/antigravity/skills/airflow-dag-patterns` |
| **ai-wrapper-product** | "Expert in building products that wrap AI APIs (OpenAI; Anthropic; etc.) into focused tools people will pay for. Not jus | `/home/phyton/.gemini/antigravity/skills/ai-wrapper-product` |
| **algolia-search** | "Expert patterns for Algolia search implementation; indexing strategies; React InstantSearch; and relevance tuning Use w | `/home/phyton/.gemini/antigravity/skills/algolia-search` |
| **angular-best-practices** | "Angular performance optimization and best practices guide. Use when writing; reviewing; or refactoring Angular code for | `/home/phyton/.gemini/antigravity/skills/angular-best-practices` |
| **angular-migration** | "Migrate from AngularJS to Angular using hybrid mode; incremental component rewriting; and dependency injection updates. | `/home/phyton/.gemini/antigravity/skills/angular-migration` |
| **angular** | Modern Angular (v20+) expert with deep knowledge of Signals; Standalone Components; Zoneless applications; SSR/Hydration | `/home/phyton/.gemini/antigravity/skills/angular` |
| **angular-state-management** | "Master modern Angular state management with Signals; NgRx; and RxJS. Use when setting up global state; managing compone | `/home/phyton/.gemini/antigravity/skills/angular-state-management` |
| **angular-ui-patterns** | "Modern Angular UI patterns for loading states; error handling; and data display. Use when building UI components; handl | `/home/phyton/.gemini/antigravity/skills/angular-ui-patterns` |
| **antigravity-workflows** | "Orchestrate multiple Antigravity skills through guided workflows for SaaS MVP delivery; security audits; AI agent build | `/home/phyton/.gemini/antigravity/skills/antigravity-workflows` |
| **api-design-principles** | "Master REST and GraphQL API design principles to build intuitive; scalable; and maintainable APIs that delight develope | `/home/phyton/.gemini/antigravity/skills/api-design-principles` |
| **api-documentation** | "API documentation workflow for generating OpenAPI specs; creating developer guides; and maintaining comprehensive API d | `/home/phyton/.gemini/antigravity/skills/api-documentation` |
| **apify-actorization** | "Convert existing projects into Apify Actors - serverless cloud programs. Actorize JavaScript/TypeScript (SDK with Actor | `/home/phyton/.gemini/antigravity/skills/apify-actorization` |
| **app-builder** | "Main application building orchestrator. Creates full-stack applications from natural language requests. Determines proj | `/home/phyton/.gemini/antigravity/skills/app-builder` |
| **templates** | "Project scaffolding templates for new applications. Use when creating new projects from scratch. Contains 12 templates  | `/home/phyton/.gemini/antigravity/skills/app-builder/templates` |
| **application-performance-performance-optimization** | "Optimize end-to-end application performance with profiling; observability; and backend/frontend tuning. Use when coordi | `/home/phyton/.gemini/antigravity/skills/application-performance-performance-optimization` |
| **architecture** | "Architectural decision-making framework. Requirements analysis; trade-off evaluation; ADR documentation. Use when makin | `/home/phyton/.gemini/antigravity/skills/architecture` |
| **async-python-patterns** | "Master Python asyncio; concurrent programming; and async/await patterns for high-performance applications. Use when bui | `/home/phyton/.gemini/antigravity/skills/async-python-patterns` |
| **attack-tree-construction** | "Build comprehensive attack trees to visualize threat paths. Use when mapping attack scenarios; identifying defense gaps | `/home/phyton/.gemini/antigravity/skills/attack-tree-construction` |
| **auth-implementation-patterns** | "Master authentication and authorization patterns including JWT; OAuth2; session management; and RBAC to build secure; s | `/home/phyton/.gemini/antigravity/skills/auth-implementation-patterns` |
| **automate-whatsapp** | "Build WhatsApp automations with Kapso workflows: configure WhatsApp triggers; edit workflow graphs; manage executions;  | `/home/phyton/.gemini/antigravity/skills/automate-whatsapp` |
| **autonomous-agent-patterns** | "Design patterns for building autonomous coding agents. Covers tool integration; permission systems; browser automation; | `/home/phyton/.gemini/antigravity/skills/autonomous-agent-patterns` |
| **avalonia-layout-zafiro** | "Guidelines for modern Avalonia UI layout using Zafiro.Avalonia; emphasizing shared styles; generic components; and avoi | `/home/phyton/.gemini/antigravity/skills/avalonia-layout-zafiro` |
| **avalonia-viewmodels-zafiro** | "Optimal ViewModel and Wizard creation patterns for Avalonia using Zafiro and ReactiveUI." | `/home/phyton/.gemini/antigravity/skills/avalonia-viewmodels-zafiro` |
| **avalonia-zafiro-development** | "Mandatory skills; conventions; and behavioral rules for Avalonia UI development using the Zafiro toolkit." | `/home/phyton/.gemini/antigravity/skills/avalonia-zafiro-development` |
| **aws-serverless** | "Specialized skill for building production-ready serverless applications on AWS. Covers Lambda functions; API Gateway; D | `/home/phyton/.gemini/antigravity/skills/aws-serverless` |
| **azure-ai-anomalydetector-java** | "Build anomaly detection applications with Azure AI Anomaly Detector SDK for Java. Use when implementing univariate/mult | `/home/phyton/.gemini/antigravity/skills/azure-ai-anomalydetector-java` |
| **azure-ai-contentsafety-java** | "Build content moderation applications with Azure AI Content Safety SDK for Java. Use when implementing text/image analy | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-java` |
| **azure-ai-document-intelligence-dotnet** | Azure AI Document Intelligence SDK for .NET. Extract text; tables; and structured data from documents using prebuilt and | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-dotnet` |
| **azure-ai-formrecognizer-java** | "Build document analysis applications with Azure Document Intelligence (Form Recognizer) SDK for Java. Use when extracti | `/home/phyton/.gemini/antigravity/skills/azure-ai-formrecognizer-java` |
| **azure-ai-projects-py** | "Build AI applications using the Azure AI Projects Python SDK (azure-ai-projects). Use when working with Foundry project | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-py` |
| **azure-ai-projects-ts** | "Build AI applications using Azure AI Projects SDK for JavaScript (@azure/ai-projects). Use when working with Foundry pr | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-ts` |
| **azure-ai-translation-ts** | "Build translation applications using Azure Translation SDKs for JavaScript (@azure-rest/ai-translation-text; @azure-res | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-ts` |
| **azure-ai-vision-imageanalysis-java** | "Build image analysis applications with Azure AI Vision SDK for Java. Use when implementing image captioning; OCR text e | `/home/phyton/.gemini/antigravity/skills/azure-ai-vision-imageanalysis-java` |
| **azure-ai-voicelive-dotnet** | Azure AI Voice Live SDK for .NET. Build real-time voice AI applications with bidirectional WebSocket communication. | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-dotnet` |
| **azure-ai-voicelive-py** | "Build real-time voice AI applications using Azure AI Voice Live SDK (azure-ai-voicelive). Use this skill when creating  | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-py` |
| **azure-ai-voicelive-ts** | Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket co | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-ts` |
| **azure-appconfiguration-ts** | "Build applications using Azure App Configuration SDK for JavaScript (@azure/app-configuration). Use when working with c | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-ts` |
| **azure-communication-callautomation-java** | "Build call automation workflows with Azure Communication Services Call Automation Java SDK. Use when implementing IVR s | `/home/phyton/.gemini/antigravity/skills/azure-communication-callautomation-java` |
| **azure-communication-chat-java** | "Build real-time chat applications with Azure Communication Services Chat Java SDK. Use when implementing chat threads;  | `/home/phyton/.gemini/antigravity/skills/azure-communication-chat-java` |
| **azure-cosmos-db-py** | "Build Azure Cosmos DB NoSQL services with Python/FastAPI following production-grade patterns. Use when implementing dat | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-db-py` |
| **azure-cosmos-java** | Azure Cosmos DB SDK for Java. NoSQL database operations with global distribution; multi-model support; and reactive patt | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-java` |
| **azure-cosmos-ts** | Azure Cosmos DB JavaScript/TypeScript SDK (@azure/cosmos) for data plane operations. Use for CRUD operations on document | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-ts` |
| **azure-data-tables-java** | "Build table storage applications with Azure Tables SDK for Java. Use when working with Azure Table Storage or Cosmos DB | `/home/phyton/.gemini/antigravity/skills/azure-data-tables-java` |

### 🗄️ Database

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **php-phinx** | > | `/home/phyton/.config/opencode/skills/php-phinx` |
| **ai-engineer** | Build production-ready LLM applications; advanced RAG systems; and intelligent agents. Implements vector search; multimo | `/home/phyton/.gemini/antigravity/skills/ai-engineer` |
| **angular-migration** | "Migrate from AngularJS to Angular using hybrid mode; incremental component rewriting; and dependency injection updates. | `/home/phyton/.gemini/antigravity/skills/angular-migration` |
| **appdeploy** | "Deploy web apps with backend APIs; database; and file storage. Use when the user asks to deploy or publish a website or | `/home/phyton/.gemini/antigravity/skills/appdeploy` |
| **azure-cosmos-db-py** | "Build Azure Cosmos DB NoSQL services with Python/FastAPI following production-grade patterns. Use when implementing dat | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-db-py` |
| **azure-cosmos-java** | Azure Cosmos DB SDK for Java. NoSQL database operations with global distribution; multi-model support; and reactive patt | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-java` |
| **azure-cosmos-py** | Azure Cosmos DB SDK for Python (NoSQL API). Use for document CRUD; queries; containers; and globally distributed data. | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-py` |
| **azure-cosmos-rust** | Azure Cosmos DB SDK for Rust (NoSQL API). Use for document CRUD; queries; containers; and globally distributed data. | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-rust` |
| **azure-cosmos-ts** | Azure Cosmos DB JavaScript/TypeScript SDK (@azure/cosmos) for data plane operations. Use for CRUD operations on document | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-ts` |
| **azure-data-tables-java** | "Build table storage applications with Azure Tables SDK for Java. Use when working with Azure Table Storage or Cosmos DB | `/home/phyton/.gemini/antigravity/skills/azure-data-tables-java` |
| **azure-data-tables-py** | Azure Tables SDK for Python (Storage and Cosmos DB). Use for NoSQL key-value storage; entity CRUD; and batch operations. | `/home/phyton/.gemini/antigravity/skills/azure-data-tables-py` |
| **azure-mgmt-mongodbatlas-dotnet** | "Manage MongoDB Atlas Organizations as Azure ARM resources using Azure.ResourceManager.MongoDBAtlas SDK. Use when creati | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-mongodbatlas-dotnet` |
| **azure-postgres-ts** | Connect to Azure Database for PostgreSQL Flexible Server from Node.js/TypeScript using the pg (node-postgres) package. | `/home/phyton/.gemini/antigravity/skills/azure-postgres-ts` |
| **azure-resource-manager-cosmosdb-dotnet** | Azure Resource Manager SDK for Cosmos DB in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-cosmosdb-dotnet` |
| **azure-resource-manager-mysql-dotnet** | Azure MySQL Flexible Server SDK for .NET. Database management for MySQL Flexible Server deployments. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-mysql-dotnet` |
| **azure-resource-manager-postgresql-dotnet** | Azure PostgreSQL Flexible Server SDK for .NET. Database management for PostgreSQL Flexible Server deployments. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-postgresql-dotnet` |
| **azure-resource-manager-redis-dotnet** | Azure Resource Manager SDK for Redis in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-redis-dotnet` |
| **azure-resource-manager-sql-dotnet** | Azure Resource Manager SDK for Azure SQL in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-sql-dotnet` |
| **azure-search-documents-dotnet** | Azure AI Search SDK for .NET (Azure.Search.Documents). Use for building search applications with full-text; vector; sema | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-dotnet` |
| **azure-search-documents-py** | Azure AI Search SDK for Python. Use for vector search; hybrid search; semantic ranking; indexing; and skillsets. | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-py` |
| **bullmq-specialist** | "BullMQ expert for Redis-backed job queues; background processing; and reliable async execution in Node.js/TypeScript ap | `/home/phyton/.gemini/antigravity/skills/bullmq-specialist` |
| **cc-skill-backend-patterns** | "Backend architecture patterns; API design; database optimization; and server-side best practices for Node.js; Express;  | `/home/phyton/.gemini/antigravity/skills/cc-skill-backend-patterns` |
| **cc-skill-clickhouse-io** | "ClickHouse database patterns; query optimization; analytics; and data engineering best practices for high-performance a | `/home/phyton/.gemini/antigravity/skills/cc-skill-clickhouse-io` |
| **context-manager** | Elite AI context engineering specialist mastering dynamic context management; vector databases; knowledge graphs; and in | `/home/phyton/.gemini/antigravity/skills/context-manager` |
| **database-admin** | Expert database administrator specializing in modern cloud databases; automation; and reliability engineering. | `/home/phyton/.gemini/antigravity/skills/database-admin` |
| **database-architect** | Expert database architect specializing in data layer design from scratch; technology selection; schema modeling; and sca | `/home/phyton/.gemini/antigravity/skills/database-architect` |
| **database-cloud-optimization-cost-optimize** | "You are a cloud cost optimization expert specializing in reducing infrastructure expenses while maintaining performance | `/home/phyton/.gemini/antigravity/skills/database-cloud-optimization-cost-optimize` |
| **database-design** | "Database design principles and decision-making. Schema design; indexing strategy; ORM selection; serverless databases." | `/home/phyton/.gemini/antigravity/skills/database-design` |
| **database-migration** | "Execute database migrations across ORMs and platforms with zero-downtime strategies; data transformation; and rollback  | `/home/phyton/.gemini/antigravity/skills/database-migration` |
| **database-migrations-migration-observability** | "Migration monitoring; CDC; and observability infrastructure" | `/home/phyton/.gemini/antigravity/skills/database-migrations-migration-observability` |
| **database-migrations-sql-migrations** | "SQL database migrations with zero-downtime strategies for PostgreSQL; MySQL; and SQL Server. Focus on data integrity an | `/home/phyton/.gemini/antigravity/skills/database-migrations-sql-migrations` |
| **database-optimizer** | Expert database optimizer specializing in modern performance tuning; query optimization; and scalable architectures. | `/home/phyton/.gemini/antigravity/skills/database-optimizer` |
| **database** | "Database development and operations workflow covering SQL; NoSQL; database design; migrations; optimization; and data e | `/home/phyton/.gemini/antigravity/skills/database` |
| **data-quality-frameworks** | "Implement data quality validation with Great Expectations; dbt tests; and data contracts. Use when building data qualit | `/home/phyton/.gemini/antigravity/skills/data-quality-frameworks` |
| **dbt-transformation-patterns** | "Master dbt (data build tool) for analytics engineering with model organization; testing; documentation; and incremental | `/home/phyton/.gemini/antigravity/skills/dbt-transformation-patterns` |
| **fastapi-pro** | Build high-performance async APIs with FastAPI; SQLAlchemy 2.0; and Pydantic V2. Master microservices; WebSockets; and m | `/home/phyton/.gemini/antigravity/skills/fastapi-pro` |
| **firebase** | "Firebase gives you a complete backend in minutes - auth; database; storage; functions; hosting. But the ease of setup h | `/home/phyton/.gemini/antigravity/skills/firebase` |
| **framework-migration-code-migrate** | "You are a code migration expert specializing in transitioning codebases between frameworks; languages; versions; and pl | `/home/phyton/.gemini/antigravity/skills/framework-migration-code-migrate` |
| **framework-migration-deps-upgrade** | "You are a dependency management expert specializing in safe; incremental upgrades of project dependencies. Plan and exe | `/home/phyton/.gemini/antigravity/skills/framework-migration-deps-upgrade` |
| **framework-migration-legacy-modernize** | "Orchestrate a comprehensive legacy system modernization using the strangler fig pattern; enabling gradual replacement o | `/home/phyton/.gemini/antigravity/skills/framework-migration-legacy-modernize` |

### ☁️ DevOps & Cloud

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **agent-framework-azure-ai-py** | "Build Azure AI Foundry agents using the Microsoft Agent Framework Python SDK (agent-framework-azure-ai). Use when creat | `/home/phyton/.gemini/antigravity/skills/agent-framework-azure-ai-py` |
| **agents-v2-py** | "Build container-based Foundry Agents with Azure AI Projects SDK (ImageBasedHostedAgentDefinition). Use when creating ho | `/home/phyton/.gemini/antigravity/skills/agents-v2-py` |
| **airflow-dag-patterns** | "Build production Apache Airflow DAGs with best practices for operators; sensors; testing; and deployment. Use when crea | `/home/phyton/.gemini/antigravity/skills/airflow-dag-patterns` |
| **apify-actor-development** | "Develop; debug; and deploy Apify Actors - serverless cloud programs for web scraping; automation; and data processing.  | `/home/phyton/.gemini/antigravity/skills/apify-actor-development` |
| **apify-actorization** | "Convert existing projects into Apify Actors - serverless cloud programs. Actorize JavaScript/TypeScript (SDK with Actor | `/home/phyton/.gemini/antigravity/skills/apify-actorization` |
| **appdeploy** | "Deploy web apps with backend APIs; database; and file storage. Use when the user asks to deploy or publish a website or | `/home/phyton/.gemini/antigravity/skills/appdeploy` |
| **aws-cost-cleanup** | "Automated cleanup of unused AWS resources to reduce costs" | `/home/phyton/.gemini/antigravity/skills/aws-cost-cleanup` |
| **aws-cost-optimizer** | "Comprehensive AWS cost analysis and optimization recommendations using AWS CLI and Cost Explorer" | `/home/phyton/.gemini/antigravity/skills/aws-cost-optimizer` |
| **aws-penetration-testing** | "This skill should be used when the user asks to \"pentest AWS\"; \"test AWS security\"; \"enumerate IAM\"; \"exploit cl | `/home/phyton/.gemini/antigravity/skills/aws-penetration-testing` |
| **aws-serverless** | "Specialized skill for building production-ready serverless applications on AWS. Covers Lambda functions; API Gateway; D | `/home/phyton/.gemini/antigravity/skills/aws-serverless` |
| **aws-skills** | "AWS development with infrastructure automation and cloud architecture patterns" | `/home/phyton/.gemini/antigravity/skills/aws-skills` |
| **azd-deployment** | "Deploy containerized applications to Azure Container Apps using Azure Developer CLI (azd). Use when setting up azd proj | `/home/phyton/.gemini/antigravity/skills/azd-deployment` |
| **azure-ai-agents-persistent-dotnet** | Azure AI Agents Persistent SDK for .NET. Low-level SDK for creating and managing AI agents with threads; messages; runs; | `/home/phyton/.gemini/antigravity/skills/azure-ai-agents-persistent-dotnet` |
| **azure-ai-agents-persistent-java** | Azure AI Agents Persistent SDK for Java. Low-level SDK for creating and managing AI agents with threads; messages; runs; | `/home/phyton/.gemini/antigravity/skills/azure-ai-agents-persistent-java` |
| **azure-ai-anomalydetector-java** | "Build anomaly detection applications with Azure AI Anomaly Detector SDK for Java. Use when implementing univariate/mult | `/home/phyton/.gemini/antigravity/skills/azure-ai-anomalydetector-java` |
| **azure-ai-contentsafety-java** | "Build content moderation applications with Azure AI Content Safety SDK for Java. Use when implementing text/image analy | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-java` |
| **azure-ai-contentsafety-py** | Azure AI Content Safety SDK for Python. Use for detecting harmful content in text and images with multi-severity classif | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-py` |
| **azure-ai-contentsafety-ts** | "Analyze text and images for harmful content using Azure AI Content Safety (@azure-rest/ai-content-safety). Use when mod | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-ts` |
| **azure-ai-contentunderstanding-py** | Azure AI Content Understanding SDK for Python. Use for multimodal content extraction from documents; images; audio; and  | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentunderstanding-py` |
| **azure-ai-document-intelligence-dotnet** | Azure AI Document Intelligence SDK for .NET. Extract text; tables; and structured data from documents using prebuilt and | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-dotnet` |
| **azure-ai-document-intelligence-ts** | "Extract text; tables; and structured data from documents using Azure Document Intelligence (@azure-rest/ai-document-int | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-ts` |
| **azure-ai-formrecognizer-java** | "Build document analysis applications with Azure Document Intelligence (Form Recognizer) SDK for Java. Use when extracti | `/home/phyton/.gemini/antigravity/skills/azure-ai-formrecognizer-java` |
| **azure-ai-ml-py** | Azure Machine Learning SDK v2 for Python. Use for ML workspaces; jobs; models; datasets; compute; and pipelines. | `/home/phyton/.gemini/antigravity/skills/azure-ai-ml-py` |
| **azure-ai-openai-dotnet** | Azure OpenAI SDK for .NET. Client library for Azure OpenAI and OpenAI services. Use for chat completions; embeddings; im | `/home/phyton/.gemini/antigravity/skills/azure-ai-openai-dotnet` |
| **azure-ai-projects-dotnet** | Azure AI Projects SDK for .NET. High-level client for Azure AI Foundry projects including agents; connections; datasets; | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-dotnet` |
| **azure-ai-projects-java** | Azure AI Projects SDK for Java. High-level SDK for Azure AI Foundry project management including connections; datasets;  | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-java` |
| **azure-ai-projects-py** | "Build AI applications using the Azure AI Projects Python SDK (azure-ai-projects). Use when working with Foundry project | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-py` |
| **azure-ai-projects-ts** | "Build AI applications using Azure AI Projects SDK for JavaScript (@azure/ai-projects). Use when working with Foundry pr | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-ts` |
| **azure-ai-textanalytics-py** | Azure AI Text Analytics SDK for sentiment analysis; entity recognition; key phrases; language detection; PII; and health | `/home/phyton/.gemini/antigravity/skills/azure-ai-textanalytics-py` |
| **azure-ai-transcription-py** | Azure AI Transcription SDK for Python. Use for real-time and batch speech-to-text transcription with timestamps and diar | `/home/phyton/.gemini/antigravity/skills/azure-ai-transcription-py` |
| **azure-ai-translation-document-py** | Azure AI Document Translation SDK for batch translation of documents with format preservation. Use for translating Word; | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-document-py` |
| **azure-ai-translation-text-py** | Azure AI Text Translation SDK for real-time text translation; transliteration; language detection; and dictionary lookup | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-text-py` |
| **azure-ai-translation-ts** | "Build translation applications using Azure Translation SDKs for JavaScript (@azure-rest/ai-translation-text; @azure-res | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-ts` |
| **azure-ai-vision-imageanalysis-java** | "Build image analysis applications with Azure AI Vision SDK for Java. Use when implementing image captioning; OCR text e | `/home/phyton/.gemini/antigravity/skills/azure-ai-vision-imageanalysis-java` |
| **azure-ai-vision-imageanalysis-py** | Azure AI Vision Image Analysis SDK for captions; tags; objects; OCR; people detection; and smart cropping. Use for compu | `/home/phyton/.gemini/antigravity/skills/azure-ai-vision-imageanalysis-py` |
| **azure-ai-voicelive-dotnet** | Azure AI Voice Live SDK for .NET. Build real-time voice AI applications with bidirectional WebSocket communication. | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-dotnet` |
| **azure-ai-voicelive-java** | Azure AI VoiceLive SDK for Java. Real-time bidirectional voice conversations with AI assistants using WebSocket. | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-java` |
| **azure-ai-voicelive-py** | "Build real-time voice AI applications using Azure AI Voice Live SDK (azure-ai-voicelive). Use this skill when creating  | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-py` |
| **azure-ai-voicelive-ts** | Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket co | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-ts` |
| **azure-appconfiguration-java** | Azure App Configuration SDK for Java. Centralized application configuration management with key-value settings; feature  | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-java` |
| **azure-appconfiguration-py** | Azure App Configuration SDK for Python. Use for centralized configuration management; feature flags; and dynamic setting | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-py` |
| **azure-appconfiguration-ts** | "Build applications using Azure App Configuration SDK for JavaScript (@azure/app-configuration). Use when working with c | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-ts` |
| **azure-communication-callautomation-java** | "Build call automation workflows with Azure Communication Services Call Automation Java SDK. Use when implementing IVR s | `/home/phyton/.gemini/antigravity/skills/azure-communication-callautomation-java` |
| **azure-communication-callingserver-java** | "Azure Communication Services CallingServer (legacy) Java SDK. Note - This SDK is deprecated. Use azure-communication-ca | `/home/phyton/.gemini/antigravity/skills/azure-communication-callingserver-java` |
| **azure-communication-chat-java** | "Build real-time chat applications with Azure Communication Services Chat Java SDK. Use when implementing chat threads;  | `/home/phyton/.gemini/antigravity/skills/azure-communication-chat-java` |
| **azure-communication-common-java** | "Azure Communication Services common utilities for Java. Use when working with CommunicationTokenCredential; user identi | `/home/phyton/.gemini/antigravity/skills/azure-communication-common-java` |
| **azure-communication-sms-java** | "Send SMS messages with Azure Communication Services SMS Java SDK. Use when implementing SMS notifications; alerts; OTP  | `/home/phyton/.gemini/antigravity/skills/azure-communication-sms-java` |
| **azure-compute-batch-java** | Azure Batch SDK for Java. Run large-scale parallel and HPC batch jobs with pools; jobs; tasks; and compute nodes. | `/home/phyton/.gemini/antigravity/skills/azure-compute-batch-java` |
| **azure-containerregistry-py** | Azure Container Registry SDK for Python. Use for managing container images; artifacts; and repositories. | `/home/phyton/.gemini/antigravity/skills/azure-containerregistry-py` |
| **azure-cosmos-db-py** | "Build Azure Cosmos DB NoSQL services with Python/FastAPI following production-grade patterns. Use when implementing dat | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-db-py` |

### 🔒 Security

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **angular-migration** | "Migrate from AngularJS to Angular using hybrid mode; incremental component rewriting; and dependency injection updates. | `/home/phyton/.gemini/antigravity/skills/angular-migration` |
| **antigravity-workflows** | "Orchestrate multiple Antigravity skills through guided workflows for SaaS MVP delivery; security audits; AI agent build | `/home/phyton/.gemini/antigravity/skills/antigravity-workflows` |
| **api-fuzzing-bug-bounty** | "This skill should be used when the user asks to \"test API security\"; \"fuzz APIs\"; \"find IDOR vulnerabilities\"; \" | `/home/phyton/.gemini/antigravity/skills/api-fuzzing-bug-bounty` |
| **apify-influencer-discovery** | Find and evaluate influencers for brand partnerships; verify authenticity; and track collaboration performance across In | `/home/phyton/.gemini/antigravity/skills/apify-influencer-discovery` |
| **api-security-best-practices** | "Implement secure API design patterns including authentication; authorization; input validation; rate limiting; and prot | `/home/phyton/.gemini/antigravity/skills/api-security-best-practices` |
| **api-security-testing** | "API security testing workflow for REST and GraphQL APIs covering authentication; authorization; rate limiting; input va | `/home/phyton/.gemini/antigravity/skills/api-security-testing` |
| **auth-implementation-patterns** | "Master authentication and authorization patterns including JWT; OAuth2; session management; and RBAC to build secure; s | `/home/phyton/.gemini/antigravity/skills/auth-implementation-patterns` |
| **aws-penetration-testing** | "This skill should be used when the user asks to \"pentest AWS\"; \"test AWS security\"; \"enumerate IAM\"; \"exploit cl | `/home/phyton/.gemini/antigravity/skills/aws-penetration-testing` |
| **azure-identity-dotnet** | Azure Identity SDK for .NET. Authentication library for Azure SDK clients using Microsoft Entra ID. Use for DefaultAzure | `/home/phyton/.gemini/antigravity/skills/azure-identity-dotnet` |
| **azure-identity-java** | "Azure Identity Java SDK for authentication with Azure services. Use when implementing DefaultAzureCredential; managed i | `/home/phyton/.gemini/antigravity/skills/azure-identity-java` |
| **azure-identity-py** | Azure Identity SDK for Python authentication. Use for DefaultAzureCredential; managed identity; service principals; and  | `/home/phyton/.gemini/antigravity/skills/azure-identity-py` |
| **azure-identity-rust** | Azure Identity SDK for Rust authentication. Use for DeveloperToolsCredential; ManagedIdentityCredential; ClientSecretCre | `/home/phyton/.gemini/antigravity/skills/azure-identity-rust` |
| **azure-identity-ts** | "Authenticate to Azure services using Azure Identity SDK for JavaScript (@azure/identity). Use when configuring authenti | `/home/phyton/.gemini/antigravity/skills/azure-identity-ts` |
| **azure-security-keyvault-keys-dotnet** | Azure Key Vault Keys SDK for .NET. Client library for managing cryptographic keys in Azure Key Vault and Managed HSM. Us | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-keys-dotnet` |
| **azure-security-keyvault-keys-java** | "Azure Key Vault Keys Java SDK for cryptographic key management. Use when creating; managing; or using RSA/EC keys; perf | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-keys-java` |
| **azure-security-keyvault-secrets-java** | "Azure Key Vault Secrets Java SDK for secret management. Use when storing; retrieving; or managing passwords; API keys;  | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-secrets-java` |
| **backend-security-coder** | Expert in secure backend coding practices specializing in input validation; authentication; and API security. Use PROACT | `/home/phyton/.gemini/antigravity/skills/backend-security-coder` |
| **broken-authentication** | "This skill should be used when the user asks to \"test for broken authentication vulnerabilities\"; \"assess session ma | `/home/phyton/.gemini/antigravity/skills/broken-authentication` |
| **burp-suite-testing** | "This skill should be used when the user asks to \"intercept HTTP traffic\"; \"modify web requests\"; \"use Burp Suite f | `/home/phyton/.gemini/antigravity/skills/burp-suite-testing` |
| **cc-skill-security-review** | "Use this skill when adding authentication; handling user input; working with secrets; creating API endpoints; or implem | `/home/phyton/.gemini/antigravity/skills/cc-skill-security-review` |
| **clerk-auth** | "Expert patterns for Clerk auth implementation; middleware; organizations; webhooks; and user sync Use when: adding auth | `/home/phyton/.gemini/antigravity/skills/clerk-auth` |
| **codebase-cleanup-deps-audit** | "You are a dependency security expert specializing in vulnerability scanning; license compliance; and supply chain secur | `/home/phyton/.gemini/antigravity/skills/codebase-cleanup-deps-audit` |
| **code-review-checklist** | "Comprehensive checklist for conducting thorough code reviews covering functionality; security; performance; and maintai | `/home/phyton/.gemini/antigravity/skills/code-review-checklist` |
| **dependency-management-deps-audit** | "You are a dependency security expert specializing in vulnerability scanning; license compliance; and supply chain secur | `/home/phyton/.gemini/antigravity/skills/dependency-management-deps-audit` |
| **deployment-pipeline-design** | "Design multi-stage CI/CD pipelines with approval gates; security checks; and deployment orchestration. Use when archite | `/home/phyton/.gemini/antigravity/skills/deployment-pipeline-design` |
| **doc-coauthoring** | "Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation; p | `/home/phyton/.gemini/antigravity/skills/doc-coauthoring` |
| **docker-expert** | "Docker containerization expert with deep knowledge of multi-stage builds; image optimization; container security; Docke | `/home/phyton/.gemini/antigravity/skills/docker-expert` |
| **dotnet-backend** | "Build ASP.NET Core 8+ backend services with EF Core; auth; background jobs; and production API patterns." | `/home/phyton/.gemini/antigravity/skills/dotnet-backend` |
| **ethical-hacking-methodology** | "This skill should be used when the user asks to \"learn ethical hacking\"; \"understand penetration testing lifecycle\" | `/home/phyton/.gemini/antigravity/skills/ethical-hacking-methodology` |
| **fastapi-router-py** | "Create FastAPI routers with CRUD operations; authentication dependencies; and proper response models. Use when building | `/home/phyton/.gemini/antigravity/skills/fastapi-router-py` |
| **fastapi-templates** | "Create production-ready FastAPI projects with async patterns; dependency injection; and comprehensive error handling. U | `/home/phyton/.gemini/antigravity/skills/fastapi-templates` |
| **ffuf-claude-skill** | "Web fuzzing with ffuf" | `/home/phyton/.gemini/antigravity/skills/ffuf-claude-skill` |
| **file-path-traversal** | "This skill should be used when the user asks to \"test for directory traversal\"; \"exploit path traversal vulnerabilit | `/home/phyton/.gemini/antigravity/skills/file-path-traversal` |
| **find-bugs** | "Find bugs; security vulnerabilities; and code quality issues in local branch changes. Use when asked to review changes; | `/home/phyton/.gemini/antigravity/skills/find-bugs` |
| **firebase** | "Firebase gives you a complete backend in minutes - auth; database; storage; functions; hosting. But the ease of setup h | `/home/phyton/.gemini/antigravity/skills/firebase` |
| **firmware-analyst** | Expert firmware analyst specializing in embedded systems; IoT security; and hardware reverse engineering. | `/home/phyton/.gemini/antigravity/skills/firmware-analyst` |
| **frontend-mobile-security-xss-scan** | "You are a frontend security specialist focusing on Cross-Site Scripting (XSS) vulnerability detection and prevention. A | `/home/phyton/.gemini/antigravity/skills/frontend-mobile-security-xss-scan` |
| **frontend-security-coder** | Expert in secure frontend coding practices specializing in XSS prevention; output sanitization; and client-side security | `/home/phyton/.gemini/antigravity/skills/frontend-security-coder` |
| **graphql-architect** | Master modern GraphQL with federation; performance optimization; and enterprise security. Build scalable schemas; implem | `/home/phyton/.gemini/antigravity/skills/graphql-architect` |
| **html-injection-testing** | "This skill should be used when the user asks to \"test for HTML injection\"; \"inject HTML into web pages\"; \"perform  | `/home/phyton/.gemini/antigravity/skills/html-injection-testing` |
| **hubspot-integration** | "Expert patterns for HubSpot CRM integration including OAuth authentication; CRM objects; associations; batch operations | `/home/phyton/.gemini/antigravity/skills/hubspot-integration` |
| **idor-testing** | "This skill should be used when the user asks to \"test for insecure direct object references;\" \"find IDOR vulnerabili | `/home/phyton/.gemini/antigravity/skills/idor-testing` |
| **incident-runbook-templates** | "Create structured incident response runbooks with step-by-step procedures; escalation paths; and recovery actions. Use  | `/home/phyton/.gemini/antigravity/skills/incident-runbook-templates` |
| **k8s-security-policies** | "Implement Kubernetes security policies including NetworkPolicy; PodSecurityPolicy; and RBAC for production-grade securi | `/home/phyton/.gemini/antigravity/skills/k8s-security-policies` |
| **laravel-security-audit** | "Security auditor for Laravel applications. Analyzes code for vulnerabilities; misconfigurations; and insecure practices | `/home/phyton/.gemini/antigravity/skills/laravel-security-audit` |
| **linkerd-patterns** | "Implement Linkerd service mesh patterns for lightweight; security-focused service mesh deployments. Use when setting up | `/home/phyton/.gemini/antigravity/skills/linkerd-patterns` |
| **linux-privilege-escalation** | "This skill should be used when the user asks to \"escalate privileges on Linux\"; \"find privesc vectors on Linux syste | `/home/phyton/.gemini/antigravity/skills/linux-privilege-escalation` |
| **malware-analyst** | Expert malware analyst specializing in defensive malware research; threat intelligence; and incident response. Masters s | `/home/phyton/.gemini/antigravity/skills/malware-analyst` |
| **metasploit-framework** | "This skill should be used when the user asks to \"use Metasploit for penetration testing\"; \"exploit vulnerabilities w | `/home/phyton/.gemini/antigravity/skills/metasploit-framework` |
| **micro-saas-launcher** | "Expert in launching small; focused SaaS products fast - the indie hacker approach to building profitable software. Cove | `/home/phyton/.gemini/antigravity/skills/micro-saas-launcher` |

### 🤖 AI & Machine Learning

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **bruno-api-tester** | "Experto en diseño; generación y validación de colecciones de Bruno API Client (.bru) para pruebas automatizadas de A | `/home/phyton/.agent/skills/bruno-api-tester` |
| **siest-backend-core** | "Reglas arquitectónicas y de desarrollo para el proyecto SIEstBackend (PHP 8+; Flight Framework; Dual DB)." | `/home/phyton/.agent/skills/siest-backend-core` |
| **go-testing** | > | `/home/phyton/.claude/skills/go-testing` |
| **sdd-apply** | > | `/home/phyton/.claude/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.claude/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.claude/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.claude/skills/sdd-explore` |
| **sdd-init** | > | `/home/phyton/.claude/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.claude/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.claude/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.claude/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.claude/skills/sdd-verify` |
| **skill-creator** | > | `/home/phyton/.claude/skills/skill-creator` |
| **engram-architecture-guardrails** | > | `/home/phyton/clawd/skills/atl/architecture-guardrails` |
| **engram-business-rules** | > | `/home/phyton/clawd/skills/atl/business-rules` |
| **engram-plugin-thin** | > | `/home/phyton/clawd/skills/atl/plugin-thin` |
| **engram-testing-coverage** | > | `/home/phyton/clawd/skills/atl/testing-coverage` |
| **engram-tui-quality** | > | `/home/phyton/clawd/skills/atl/tui-quality` |
| **go-testing** | > | `/home/phyton/.config/opencode/skills/go-testing` |
| **skill-creator** | > | `/home/phyton/.config/opencode/skills/skill-creator` |
| **go-testing** | > | `/home/phyton/.copilot/skills/go-testing` |
| **skill-creator** | > | `/home/phyton/.copilot/skills/skill-creator` |
| **go-testing** | > | `/home/phyton/.cursor/skills/go-testing` |
| **skill-creator** | > | `/home/phyton/.cursor/skills/skill-creator` |
| **00-andruia-consultant** | "Arquitecto de Soluciones Principal y Consultor Tecnológico de Andru.ia. Diagnostica y traza la hoja de ruta óptima pa | `/home/phyton/.gemini/antigravity/skills/00-andruia-consultant` |
| **10-andruia-skill-smith** | "Ingeniero de Sistemas de Andru.ia. Diseña; redacta y despliega nuevas habilidades (skills) dentro del repositorio sigu | `/home/phyton/.gemini/antigravity/skills/10-andruia-skill-smith` |
| **20-andruia-niche-intelligence** | "Estratega de Inteligencia de Dominio de Andru.ia. Analiza el nicho específico de un proyecto para inyectar conocimient | `/home/phyton/.gemini/antigravity/skills/20-andruia-niche-intelligence` |
| **3d-web-experience** | "Expert in building 3D experiences for the web - Three.js; React Three Fiber; Spline; WebGL; and interactive 3D scenes.  | `/home/phyton/.gemini/antigravity/skills/3d-web-experience` |
| **ab-test-setup** | "Structured guide for setting up A/B tests with mandatory gates for hypothesis; metrics; and execution readiness." | `/home/phyton/.gemini/antigravity/skills/ab-test-setup` |
| **accessibility-compliance-accessibility-audit** | "You are an accessibility expert specializing in WCAG compliance; inclusive design; and assistive technology compatibili | `/home/phyton/.gemini/antigravity/skills/accessibility-compliance-accessibility-audit` |
| **activecampaign-automation** | "Automate ActiveCampaign tasks via Rube MCP (Composio): manage contacts; tags; list subscriptions; automation enrollment | `/home/phyton/.gemini/antigravity/skills/activecampaign-automation` |
| **active-directory-attacks** | "This skill should be used when the user asks to \"attack Active Directory\"; \"exploit AD\"; \"Kerberoasting\"; \"DCSyn | `/home/phyton/.gemini/antigravity/skills/active-directory-attacks` |
| **address-github-comments** | "Use when you need to address review or issue comments on an open GitHub Pull Request using the gh CLI." | `/home/phyton/.gemini/antigravity/skills/address-github-comments` |
| **agent-evaluation** | "Testing and benchmarking LLM agents including behavioral testing; capability assessment; reliability metrics; and produ | `/home/phyton/.gemini/antigravity/skills/agent-evaluation` |
| **agentfolio** | "Skill for discovering and researching autonomous AI agents; tools; and ecosystems using the AgentFolio directory." | `/home/phyton/.gemini/antigravity/skills/agentfolio` |
| **agent-framework-azure-ai-py** | "Build Azure AI Foundry agents using the Microsoft Agent Framework Python SDK (agent-framework-azure-ai). Use when creat | `/home/phyton/.gemini/antigravity/skills/agent-framework-azure-ai-py` |
| **agentmail** | Email infrastructure for AI agents. Create accounts; send/receive emails; manage webhooks; and check karma balance via t | `/home/phyton/.gemini/antigravity/skills/agentmail` |
| **agent-manager-skill** | "Manage multiple local CLI agents via tmux sessions (start/stop/monitor/assign) with cron-friendly scheduling." | `/home/phyton/.gemini/antigravity/skills/agent-manager-skill` |
| **agent-memory-mcp** | "A hybrid memory system that provides persistent; searchable knowledge management for AI agents (Architecture; Patterns; | `/home/phyton/.gemini/antigravity/skills/agent-memory-mcp` |
| **agent-memory-systems** | "Memory is the cornerstone of intelligent agents. Without it; every interaction starts from zero. This skill covers the  | `/home/phyton/.gemini/antigravity/skills/agent-memory-systems` |
| **agent-orchestration-improve-agent** | "Systematic improvement of existing agents through performance analysis; prompt engineering; and continuous iteration." | `/home/phyton/.gemini/antigravity/skills/agent-orchestration-improve-agent` |
| **agent-orchestration-multi-agent-optimize** | "Optimize multi-agent systems with coordinated profiling; workload distribution; and cost-aware orchestration. Use when  | `/home/phyton/.gemini/antigravity/skills/agent-orchestration-multi-agent-optimize` |
| **agents-v2-py** | "Build container-based Foundry Agents with Azure AI Projects SDK (ImageBasedHostedAgentDefinition). Use when creating ho | `/home/phyton/.gemini/antigravity/skills/agents-v2-py` |
| **agent-tool-builder** | "Tools are how AI agents interact with the world. A well-designed tool is the difference between an agent that works and | `/home/phyton/.gemini/antigravity/skills/agent-tool-builder` |
| **ai-agent-development** | "AI agent development workflow for building autonomous agents; multi-agent systems; and agent orchestration with CrewAI; | `/home/phyton/.gemini/antigravity/skills/ai-agent-development` |
| **ai-agents-architect** | "Expert in designing and building autonomous AI agents. Masters tool use; memory systems; planning strategies; and multi | `/home/phyton/.gemini/antigravity/skills/ai-agents-architect` |
| **ai-engineer** | Build production-ready LLM applications; advanced RAG systems; and intelligent agents. Implements vector search; multimo | `/home/phyton/.gemini/antigravity/skills/ai-engineer` |
| **ai-ml** | "AI and machine learning workflow covering LLM application development; RAG implementation; agent architecture; ML pipel | `/home/phyton/.gemini/antigravity/skills/ai-ml` |
| **ai-product** | Every product will be AI-powered. The question is whether you'll build it right or ship a demo that falls apart in produ | `/home/phyton/.gemini/antigravity/skills/ai-product` |
| **airflow-dag-patterns** | "Build production Apache Airflow DAGs with best practices for operators; sensors; testing; and deployment. Use when crea | `/home/phyton/.gemini/antigravity/skills/airflow-dag-patterns` |

### ⚡ Automation & Integration

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **activecampaign-automation** | "Automate ActiveCampaign tasks via Rube MCP (Composio): manage contacts; tags; list subscriptions; automation enrollment | `/home/phyton/.gemini/antigravity/skills/activecampaign-automation` |
| **airtable-automation** | "Automate Airtable tasks via Rube MCP (Composio): records; bases; tables; fields; views. Always search tools first for c | `/home/phyton/.gemini/antigravity/skills/airtable-automation` |
| **amplitude-automation** | "Automate Amplitude tasks via Rube MCP (Composio): events; user activity; cohorts; user identification. Always search to | `/home/phyton/.gemini/antigravity/skills/amplitude-automation` |
| **apify-actor-development** | "Develop; debug; and deploy Apify Actors - serverless cloud programs for web scraping; automation; and data processing.  | `/home/phyton/.gemini/antigravity/skills/apify-actor-development` |
| **apify-audience-analysis** | Understand audience demographics; preferences; behavior patterns; and engagement quality across Facebook; Instagram; You | `/home/phyton/.gemini/antigravity/skills/apify-audience-analysis` |
| **apify-brand-reputation-monitoring** | "Track reviews; ratings; sentiment; and brand mentions across Google Maps; Booking.com; TripAdvisor; Facebook; Instagram | `/home/phyton/.gemini/antigravity/skills/apify-brand-reputation-monitoring` |
| **apify-content-analytics** | Track engagement metrics; measure campaign ROI; and analyze content performance across Instagram; Facebook; YouTube; and | `/home/phyton/.gemini/antigravity/skills/apify-content-analytics` |
| **apify-lead-generation** | "Generates B2B/B2C leads by scraping Google Maps; websites; Instagram; TikTok; Facebook; LinkedIn; YouTube; and Google S | `/home/phyton/.gemini/antigravity/skills/apify-lead-generation` |
| **apify-trend-analysis** | Discover and track emerging trends across Google Trends; Instagram; Facebook; YouTube; and TikTok to inform content stra | `/home/phyton/.gemini/antigravity/skills/apify-trend-analysis` |
| **apify-ultimate-scraper** | "Universal AI-powered web scraper for any platform. Scrape data from Instagram; Facebook; TikTok; YouTube; Google Maps;  | `/home/phyton/.gemini/antigravity/skills/apify-ultimate-scraper` |
| **asana-automation** | "Automate Asana tasks via Rube MCP (Composio): tasks; projects; sections; teams; workspaces. Always search tools first f | `/home/phyton/.gemini/antigravity/skills/asana-automation` |
| **automate-whatsapp** | "Build WhatsApp automations with Kapso workflows: configure WhatsApp triggers; edit workflow graphs; manage executions;  | `/home/phyton/.gemini/antigravity/skills/automate-whatsapp` |
| **autonomous-agent-patterns** | "Design patterns for building autonomous coding agents. Covers tool integration; permission systems; browser automation; | `/home/phyton/.gemini/antigravity/skills/autonomous-agent-patterns` |
| **aws-skills** | "AWS development with infrastructure automation and cloud architecture patterns" | `/home/phyton/.gemini/antigravity/skills/aws-skills` |
| **azure-communication-callautomation-java** | "Build call automation workflows with Azure Communication Services Call Automation Java SDK. Use when implementing IVR s | `/home/phyton/.gemini/antigravity/skills/azure-communication-callautomation-java` |
| **bamboohr-automation** | "Automate BambooHR tasks via Rube MCP (Composio): employees; time-off; benefits; dependents; employee updates. Always se | `/home/phyton/.gemini/antigravity/skills/bamboohr-automation` |
| **basecamp-automation** | "Automate Basecamp project management; to-dos; messages; people; and to-do list organization via Rube MCP (Composio). Al | `/home/phyton/.gemini/antigravity/skills/basecamp-automation` |
| **bash-pro** | 'Master of defensive Bash scripting for production automation; CI/CD | `/home/phyton/.gemini/antigravity/skills/bash-pro` |
| **billing-automation** | "Build automated billing systems for recurring payments; invoicing; subscription lifecycle; and dunning management. Use  | `/home/phyton/.gemini/antigravity/skills/billing-automation` |
| **bitbucket-automation** | "Automate Bitbucket repositories; pull requests; branches; issues; and workspace management via Rube MCP (Composio). Alw | `/home/phyton/.gemini/antigravity/skills/bitbucket-automation` |
| **blockrun** | "Use when user needs capabilities Claude lacks (image generation; real-time X/Twitter data) or explicitly requests exter | `/home/phyton/.gemini/antigravity/skills/blockrun` |
| **box-automation** | "Automate Box cloud storage operations including file upload/download; search; folder management; sharing; collaboration | `/home/phyton/.gemini/antigravity/skills/box-automation` |
| **brevo-automation** | "Automate Brevo (Sendinblue) tasks via Rube MCP (Composio): manage email campaigns; create/edit templates; track senders | `/home/phyton/.gemini/antigravity/skills/brevo-automation` |
| **browser-automation** | "Browser automation powers web testing; scraping; and AI agent interactions. The difference between a flaky script and a | `/home/phyton/.gemini/antigravity/skills/browser-automation` |
| **cal-com-automation** | "Automate Cal.com tasks via Rube MCP (Composio): manage bookings; check availability; configure webhooks; and handle tea | `/home/phyton/.gemini/antigravity/skills/cal-com-automation` |
| **calendly-automation** | "Automate Calendly scheduling; event management; invitee tracking; availability checks; and organization administration  | `/home/phyton/.gemini/antigravity/skills/calendly-automation` |
| **changelog-automation** | "Automate changelog generation from commits; PRs; and releases following Keep a Changelog format. Use when setting up re | `/home/phyton/.gemini/antigravity/skills/changelog-automation` |
| **cicd-automation-workflow-automate** | "You are a workflow automation expert specializing in creating efficient CI/CD pipelines; GitHub Actions workflows; and  | `/home/phyton/.gemini/antigravity/skills/cicd-automation-workflow-automate` |
| **circleci-automation** | "Automate CircleCI tasks via Rube MCP (Composio): trigger pipelines; monitor workflows/jobs; retrieve artifacts and test | `/home/phyton/.gemini/antigravity/skills/circleci-automation` |
| **clickup-automation** | "Automate ClickUp project management including tasks; spaces; folders; lists; comments; and team operations via Rube MCP | `/home/phyton/.gemini/antigravity/skills/clickup-automation` |
| **close-automation** | "Automate Close CRM tasks via Rube MCP (Composio): create leads; manage calls/SMS; handle tasks; and track notes. Always | `/home/phyton/.gemini/antigravity/skills/close-automation` |
| **coda-automation** | "Automate Coda tasks via Rube MCP (Composio): manage docs; pages; tables; rows; formulas; permissions; and publishing. A | `/home/phyton/.gemini/antigravity/skills/coda-automation` |
| **confluence-automation** | "Automate Confluence page creation; content search; space management; labels; and hierarchy navigation via Rube MCP (Com | `/home/phyton/.gemini/antigravity/skills/confluence-automation` |
| **database-admin** | Expert database administrator specializing in modern cloud databases; automation; and reliability engineering. | `/home/phyton/.gemini/antigravity/skills/database-admin` |
| **datadog-automation** | "Automate Datadog tasks via Rube MCP (Composio): query metrics; search logs; manage monitors/dashboards; create events a | `/home/phyton/.gemini/antigravity/skills/datadog-automation` |
| **deployment-engineer** | Expert deployment engineer specializing in modern CI/CD pipelines; GitOps workflows; and advanced deployment automation. | `/home/phyton/.gemini/antigravity/skills/deployment-engineer` |
| **discord-automation** | "Automate Discord tasks via Rube MCP (Composio): messages; channels; roles; webhooks; reactions. Always search tools fir | `/home/phyton/.gemini/antigravity/skills/discord-automation` |
| **discord-bot-architect** | "Specialized skill for building production-ready Discord bots. Covers Discord.js (JavaScript) and Pycord (Python); gatew | `/home/phyton/.gemini/antigravity/skills/discord-bot-architect` |
| **docusign-automation** | "Automate DocuSign tasks via Rube MCP (Composio): templates; envelopes; signatures; document management. Always search t | `/home/phyton/.gemini/antigravity/skills/docusign-automation` |
| **dropbox-automation** | "Automate Dropbox file management; sharing; search; uploads; downloads; and folder operations via Rube MCP (Composio). A | `/home/phyton/.gemini/antigravity/skills/dropbox-automation` |
| **e2e-testing** | "End-to-end testing workflow with Playwright for browser automation; visual regression; cross-browser testing; and CI/CD | `/home/phyton/.gemini/antigravity/skills/e2e-testing` |
| **figma-automation** | "Automate Figma tasks via Rube MCP (Composio): files; components; design tokens; comments; exports. Always search tools  | `/home/phyton/.gemini/antigravity/skills/figma-automation` |
| **freshdesk-automation** | "Automate Freshdesk helpdesk operations including tickets; contacts; companies; notes; and replies via Rube MCP (Composi | `/home/phyton/.gemini/antigravity/skills/freshdesk-automation` |
| **freshservice-automation** | "Automate Freshservice ITSM tasks via Rube MCP (Composio): create/update tickets; bulk operations; service requests; and | `/home/phyton/.gemini/antigravity/skills/freshservice-automation` |
| **github-automation** | "Automate GitHub repositories; issues; pull requests; branches; CI/CD; and permissions via Rube MCP (Composio). Manage c | `/home/phyton/.gemini/antigravity/skills/github-automation` |
| **github-workflow-automation** | "Automate GitHub workflows with AI assistance. Includes PR reviews; issue triage; CI/CD integration; and Git operations. | `/home/phyton/.gemini/antigravity/skills/github-workflow-automation` |
| **gitlab-automation** | "Automate GitLab project management; issues; merge requests; pipelines; branches; and user operations via Rube MCP (Comp | `/home/phyton/.gemini/antigravity/skills/gitlab-automation` |
| **gitlab-ci-patterns** | "Build GitLab CI/CD pipelines with multi-stage workflows; caching; and distributed runners for scalable automation. Use  | `/home/phyton/.gemini/antigravity/skills/gitlab-ci-patterns` |
| **gmail-automation** | "Automate Gmail tasks via Rube MCP (Composio): send/reply; search; labels; drafts; attachments. Always search tools firs | `/home/phyton/.gemini/antigravity/skills/gmail-automation` |
| **google-analytics-automation** | "Automate Google Analytics tasks via Rube MCP (Composio): run reports; list accounts/properties; funnels; pivots; key ev | `/home/phyton/.gemini/antigravity/skills/google-analytics-automation` |
| **google-calendar-automation** | "Automate Google Calendar events; scheduling; availability checks; and attendee management via Rube MCP (Composio). Crea | `/home/phyton/.gemini/antigravity/skills/google-calendar-automation` |
| **google-drive-automation** | "Automate Google Drive file operations (upload; download; search; share; organize) via Rube MCP (Composio). Upload/downl | `/home/phyton/.gemini/antigravity/skills/google-drive-automation` |
| **googlesheets-automation** | "Automate Google Sheets operations (read; write; format; filter; manage spreadsheets) via Rube MCP (Composio). Read/writ | `/home/phyton/.gemini/antigravity/skills/googlesheets-automation` |
| **go-playwright** | "Expert capability for robust; stealthy; and efficient browser automation using Playwright Go." | `/home/phyton/.gemini/antigravity/skills/go-playwright` |
| **go-rod-master** | "Comprehensive guide for browser automation and web scraping with go-rod (Chrome DevTools Protocol) including stealth an | `/home/phyton/.gemini/antigravity/skills/go-rod-master` |
| **helpdesk-automation** | "Automate HelpDesk tasks via Rube MCP (Composio): list tickets; manage views; use canned responses; and configure custom | `/home/phyton/.gemini/antigravity/skills/helpdesk-automation` |
| **hubspot-automation** | "Automate HubSpot CRM operations (contacts; companies; deals; tickets; properties) via Rube MCP using Composio integrati | `/home/phyton/.gemini/antigravity/skills/hubspot-automation` |
| **hubspot-integration** | "Expert patterns for HubSpot CRM integration including OAuth authentication; CRM objects; associations; batch operations | `/home/phyton/.gemini/antigravity/skills/hubspot-integration` |
| **instagram-automation** | "Automate Instagram tasks via Rube MCP (Composio): create posts; carousels; manage media; get insights; and publishing l | `/home/phyton/.gemini/antigravity/skills/instagram-automation` |
| **intercom-automation** | "Automate Intercom tasks via Rube MCP (Composio): conversations; contacts; companies; segments; admins. Always search to | `/home/phyton/.gemini/antigravity/skills/intercom-automation` |

### 📋 SDD (Spec-Driven Development)

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **java-lsp-tools** | Compiler-accurate Java code intelligence tools powered by the Java Language Server. ALWAYS load this skill when the work | `/home/phyton/.antigravity/extensions/vscjava.vscode-java-dependency-0.27.2-universal/resources/skills/java-lsp-tools` |
| **sdd-apply** | > | `/home/phyton/.claude/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.claude/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.claude/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.claude/skills/sdd-explore` |
| **sdd-init** | > | `/home/phyton/.claude/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.claude/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.claude/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.claude/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.claude/skills/sdd-verify` |
| **sdd-apply** | > | `/home/phyton/clawd/skills/atl/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/clawd/skills/atl/sdd-archive` |
| **sdd-design** | > | `/home/phyton/clawd/skills/atl/sdd-design` |
| **sdd-explore** | > | `/home/phyton/clawd/skills/atl/sdd-explore` |
| **engram-sdd-flow** | > | `/home/phyton/clawd/skills/atl/sdd-flow` |
| **sdd-init** | > | `/home/phyton/clawd/skills/atl/sdd-init` |
| **sdd-propose** | > | `/home/phyton/clawd/skills/atl/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/clawd/skills/atl/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/clawd/skills/atl/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/clawd/skills/atl/sdd-verify` |
| **sdd-apply** | > | `/home/phyton/.config/opencode/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.config/opencode/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.config/opencode/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.config/opencode/skills/sdd-explore` |
| **sdd-init** | > | `/home/phyton/.config/opencode/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.config/opencode/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.config/opencode/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.config/opencode/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.config/opencode/skills/sdd-verify` |
| **sdd-apply** | > | `/home/phyton/.copilot/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.copilot/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.copilot/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.copilot/skills/sdd-explore` |
| **sdd-init** | > | `/home/phyton/.copilot/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.copilot/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.copilot/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.copilot/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.copilot/skills/sdd-verify` |
| **sdd-apply** | > | `/home/phyton/.cursor/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.cursor/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.cursor/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.cursor/skills/sdd-explore` |
| **sdd-init** | > | `/home/phyton/.cursor/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.cursor/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.cursor/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.cursor/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.cursor/skills/sdd-verify` |
| **00-andruia-consultant** | "Arquitecto de Soluciones Principal y Consultor Tecnológico de Andru.ia. Diagnostica y traza la hoja de ruta óptima pa | `/home/phyton/.gemini/antigravity/skills/00-andruia-consultant` |
| **10-andruia-skill-smith** | "Ingeniero de Sistemas de Andru.ia. Diseña; redacta y despliega nuevas habilidades (skills) dentro del repositorio sigu | `/home/phyton/.gemini/antigravity/skills/10-andruia-skill-smith` |
| **20-andruia-niche-intelligence** | "Estratega de Inteligencia de Dominio de Andru.ia. Analiza el nicho específico de un proyecto para inyectar conocimient | `/home/phyton/.gemini/antigravity/skills/20-andruia-niche-intelligence` |
| **3d-web-experience** | "Expert in building 3D experiences for the web - Three.js; React Three Fiber; Spline; WebGL; and interactive 3D scenes.  | `/home/phyton/.gemini/antigravity/skills/3d-web-experience` |
| **ab-test-setup** | "Structured guide for setting up A/B tests with mandatory gates for hypothesis; metrics; and execution readiness." | `/home/phyton/.gemini/antigravity/skills/ab-test-setup` |
| **accessibility-compliance-accessibility-audit** | "You are an accessibility expert specializing in WCAG compliance; inclusive design; and assistive technology compatibili | `/home/phyton/.gemini/antigravity/skills/accessibility-compliance-accessibility-audit` |
| **activecampaign-automation** | "Automate ActiveCampaign tasks via Rube MCP (Composio): manage contacts; tags; list subscriptions; automation enrollment | `/home/phyton/.gemini/antigravity/skills/activecampaign-automation` |
| **active-directory-attacks** | "This skill should be used when the user asks to \"attack Active Directory\"; \"exploit AD\"; \"Kerberoasting\"; \"DCSyn | `/home/phyton/.gemini/antigravity/skills/active-directory-attacks` |
| **address-github-comments** | "Use when you need to address review or issue comments on an open GitHub Pull Request using the gh CLI." | `/home/phyton/.gemini/antigravity/skills/address-github-comments` |
| **agent-evaluation** | "Testing and benchmarking LLM agents including behavioral testing; capability assessment; reliability metrics; and produ | `/home/phyton/.gemini/antigravity/skills/agent-evaluation` |
| **agentfolio** | "Skill for discovering and researching autonomous AI agents; tools; and ecosystems using the AgentFolio directory." | `/home/phyton/.gemini/antigravity/skills/agentfolio` |
| **agent-framework-azure-ai-py** | "Build Azure AI Foundry agents using the Microsoft Agent Framework Python SDK (agent-framework-azure-ai). Use when creat | `/home/phyton/.gemini/antigravity/skills/agent-framework-azure-ai-py` |
| **agentmail** | Email infrastructure for AI agents. Create accounts; send/receive emails; manage webhooks; and check karma balance via t | `/home/phyton/.gemini/antigravity/skills/agentmail` |
| **agent-manager-skill** | "Manage multiple local CLI agents via tmux sessions (start/stop/monitor/assign) with cron-friendly scheduling." | `/home/phyton/.gemini/antigravity/skills/agent-manager-skill` |
| **agent-memory-mcp** | "A hybrid memory system that provides persistent; searchable knowledge management for AI agents (Architecture; Patterns; | `/home/phyton/.gemini/antigravity/skills/agent-memory-mcp` |
| **agent-memory-systems** | "Memory is the cornerstone of intelligent agents. Without it; every interaction starts from zero. This skill covers the  | `/home/phyton/.gemini/antigravity/skills/agent-memory-systems` |
| **agent-orchestration-improve-agent** | "Systematic improvement of existing agents through performance analysis; prompt engineering; and continuous iteration." | `/home/phyton/.gemini/antigravity/skills/agent-orchestration-improve-agent` |
| **agent-orchestration-multi-agent-optimize** | "Optimize multi-agent systems with coordinated profiling; workload distribution; and cost-aware orchestration. Use when  | `/home/phyton/.gemini/antigravity/skills/agent-orchestration-multi-agent-optimize` |
| **agents-v2-py** | "Build container-based Foundry Agents with Azure AI Projects SDK (ImageBasedHostedAgentDefinition). Use when creating ho | `/home/phyton/.gemini/antigravity/skills/agents-v2-py` |
| **agent-tool-builder** | "Tools are how AI agents interact with the world. A well-designed tool is the difference between an agent that works and | `/home/phyton/.gemini/antigravity/skills/agent-tool-builder` |
| **ai-agent-development** | "AI agent development workflow for building autonomous agents; multi-agent systems; and agent orchestration with CrewAI; | `/home/phyton/.gemini/antigravity/skills/ai-agent-development` |
| **ai-agents-architect** | "Expert in designing and building autonomous AI agents. Masters tool use; memory systems; planning strategies; and multi | `/home/phyton/.gemini/antigravity/skills/ai-agents-architect` |
| **ai-engineer** | Build production-ready LLM applications; advanced RAG systems; and intelligent agents. Implements vector search; multimo | `/home/phyton/.gemini/antigravity/skills/ai-engineer` |
| **ai-ml** | "AI and machine learning workflow covering LLM application development; RAG implementation; agent architecture; ML pipel | `/home/phyton/.gemini/antigravity/skills/ai-ml` |
| **ai-product** | Every product will be AI-powered. The question is whether you'll build it right or ship a demo that falls apart in produ | `/home/phyton/.gemini/antigravity/skills/ai-product` |
| **airflow-dag-patterns** | "Build production Apache Airflow DAGs with best practices for operators; sensors; testing; and deployment. Use when crea | `/home/phyton/.gemini/antigravity/skills/airflow-dag-patterns` |
| **airtable-automation** | "Automate Airtable tasks via Rube MCP (Composio): records; bases; tables; fields; views. Always search tools first for c | `/home/phyton/.gemini/antigravity/skills/airtable-automation` |
| **ai-wrapper-product** | "Expert in building products that wrap AI APIs (OpenAI; Anthropic; etc.) into focused tools people will pay for. Not jus | `/home/phyton/.gemini/antigravity/skills/ai-wrapper-product` |
| **algolia-search** | "Expert patterns for Algolia search implementation; indexing strategies; React InstantSearch; and relevance tuning Use w | `/home/phyton/.gemini/antigravity/skills/algolia-search` |
| **algorithmic-art** | "Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration. Use this when users  | `/home/phyton/.gemini/antigravity/skills/algorithmic-art` |
| **amplitude-automation** | "Automate Amplitude tasks via Rube MCP (Composio): events; user activity; cohorts; user identification. Always search to | `/home/phyton/.gemini/antigravity/skills/amplitude-automation` |
| **analytics-tracking** | Design; audit; and improve analytics tracking systems that produce reliable; decision-ready data. | `/home/phyton/.gemini/antigravity/skills/analytics-tracking` |
| **angular-best-practices** | "Angular performance optimization and best practices guide. Use when writing; reviewing; or refactoring Angular code for | `/home/phyton/.gemini/antigravity/skills/angular-best-practices` |
| **angular-migration** | "Migrate from AngularJS to Angular using hybrid mode; incremental component rewriting; and dependency injection updates. | `/home/phyton/.gemini/antigravity/skills/angular-migration` |
| **angular** | Modern Angular (v20+) expert with deep knowledge of Signals; Standalone Components; Zoneless applications; SSR/Hydration | `/home/phyton/.gemini/antigravity/skills/angular` |
| **angular-state-management** | "Master modern Angular state management with Signals; NgRx; and RxJS. Use when setting up global state; managing compone | `/home/phyton/.gemini/antigravity/skills/angular-state-management` |
| **angular-ui-patterns** | "Modern Angular UI patterns for loading states; error handling; and data display. Use when building UI components; handl | `/home/phyton/.gemini/antigravity/skills/angular-ui-patterns` |
| **antigravity-workflows** | "Orchestrate multiple Antigravity skills through guided workflows for SaaS MVP delivery; security audits; AI agent build | `/home/phyton/.gemini/antigravity/skills/antigravity-workflows` |
| **anti-reversing-techniques** | "Understand anti-reversing; obfuscation; and protection techniques encountered during software analysis. Use when analyz | `/home/phyton/.gemini/antigravity/skills/anti-reversing-techniques` |
| **api-design-principles** | "Master REST and GraphQL API design principles to build intuitive; scalable; and maintainable APIs that delight develope | `/home/phyton/.gemini/antigravity/skills/api-design-principles` |
| **api-documentation-generator** | "Generate comprehensive; developer-friendly API documentation from code; including endpoints; parameters; examples; and  | `/home/phyton/.gemini/antigravity/skills/api-documentation-generator` |
| **api-documentation** | "API documentation workflow for generating OpenAPI specs; creating developer guides; and maintaining comprehensive API d | `/home/phyton/.gemini/antigravity/skills/api-documentation` |
| **api-documenter** | Master API documentation with OpenAPI 3.1; AI-powered tools; and modern developer experience practices. Create interacti | `/home/phyton/.gemini/antigravity/skills/api-documenter` |
| **api-fuzzing-bug-bounty** | "This skill should be used when the user asks to \"test API security\"; \"fuzz APIs\"; \"find IDOR vulnerabilities\"; \" | `/home/phyton/.gemini/antigravity/skills/api-fuzzing-bug-bounty` |
| **apify-actor-development** | "Develop; debug; and deploy Apify Actors - serverless cloud programs for web scraping; automation; and data processing.  | `/home/phyton/.gemini/antigravity/skills/apify-actor-development` |
| **apify-actorization** | "Convert existing projects into Apify Actors - serverless cloud programs. Actorize JavaScript/TypeScript (SDK with Actor | `/home/phyton/.gemini/antigravity/skills/apify-actorization` |
| **apify-audience-analysis** | Understand audience demographics; preferences; behavior patterns; and engagement quality across Facebook; Instagram; You | `/home/phyton/.gemini/antigravity/skills/apify-audience-analysis` |
| **apify-brand-reputation-monitoring** | "Track reviews; ratings; sentiment; and brand mentions across Google Maps; Booking.com; TripAdvisor; Facebook; Instagram | `/home/phyton/.gemini/antigravity/skills/apify-brand-reputation-monitoring` |
| **apify-competitor-intelligence** | Analyze competitor strategies; content; pricing; ads; and market positioning across Google Maps; Booking.com; Facebook;  | `/home/phyton/.gemini/antigravity/skills/apify-competitor-intelligence` |
| **apify-content-analytics** | Track engagement metrics; measure campaign ROI; and analyze content performance across Instagram; Facebook; YouTube; and | `/home/phyton/.gemini/antigravity/skills/apify-content-analytics` |
| **apify-ecommerce** | "Scrape e-commerce data for pricing intelligence; customer reviews; and seller discovery across Amazon; Walmart; eBay; I | `/home/phyton/.gemini/antigravity/skills/apify-ecommerce` |
| **apify-influencer-discovery** | Find and evaluate influencers for brand partnerships; verify authenticity; and track collaboration performance across In | `/home/phyton/.gemini/antigravity/skills/apify-influencer-discovery` |
| **apify-lead-generation** | "Generates B2B/B2C leads by scraping Google Maps; websites; Instagram; TikTok; Facebook; LinkedIn; YouTube; and Google S | `/home/phyton/.gemini/antigravity/skills/apify-lead-generation` |
| **apify-market-research** | Analyze market conditions; geographic opportunities; pricing; consumer behavior; and product validation across Google Ma | `/home/phyton/.gemini/antigravity/skills/apify-market-research` |
| **apify-trend-analysis** | Discover and track emerging trends across Google Trends; Instagram; Facebook; YouTube; and TikTok to inform content stra | `/home/phyton/.gemini/antigravity/skills/apify-trend-analysis` |
| **apify-ultimate-scraper** | "Universal AI-powered web scraper for any platform. Scrape data from Instagram; Facebook; TikTok; YouTube; Google Maps;  | `/home/phyton/.gemini/antigravity/skills/apify-ultimate-scraper` |
| **api-patterns** | "API design principles and decision-making. REST vs GraphQL vs tRPC selection; response formats; versioning; pagination. | `/home/phyton/.gemini/antigravity/skills/api-patterns` |
| **api-security-best-practices** | "Implement secure API design patterns including authentication; authorization; input validation; rate limiting; and prot | `/home/phyton/.gemini/antigravity/skills/api-security-best-practices` |
| **api-security-testing** | "API security testing workflow for REST and GraphQL APIs covering authentication; authorization; rate limiting; input va | `/home/phyton/.gemini/antigravity/skills/api-security-testing` |
| **api-testing-observability-api-mock** | "You are an API mocking expert specializing in realistic mock services for development; testing; and demos. Design mocks | `/home/phyton/.gemini/antigravity/skills/api-testing-observability-api-mock` |
| **app-builder** | "Main application building orchestrator. Creates full-stack applications from natural language requests. Determines proj | `/home/phyton/.gemini/antigravity/skills/app-builder` |
| **templates** | "Project scaffolding templates for new applications. Use when creating new projects from scratch. Contains 12 templates  | `/home/phyton/.gemini/antigravity/skills/app-builder/templates` |
| **appdeploy** | "Deploy web apps with backend APIs; database; and file storage. Use when the user asks to deploy or publish a website or | `/home/phyton/.gemini/antigravity/skills/appdeploy` |
| **application-performance-performance-optimization** | "Optimize end-to-end application performance with profiling; observability; and backend/frontend tuning. Use when coordi | `/home/phyton/.gemini/antigravity/skills/application-performance-performance-optimization` |
| **app-store-optimization** | "Complete App Store Optimization (ASO) toolkit for researching; optimizing; and tracking mobile app performance on Apple | `/home/phyton/.gemini/antigravity/skills/app-store-optimization` |
| **architect-review** | "Master software architect specializing in modern architecture" | `/home/phyton/.gemini/antigravity/skills/architect-review` |
| **architecture-decision-records** | "Write and maintain Architecture Decision Records (ADRs) following best practices for technical decision documentation.  | `/home/phyton/.gemini/antigravity/skills/architecture-decision-records` |
| **architecture-patterns** | "Implement proven backend architecture patterns including Clean Architecture; Hexagonal Architecture; and Domain-Driven  | `/home/phyton/.gemini/antigravity/skills/architecture-patterns` |
| **architecture** | "Architectural decision-making framework. Requirements analysis; trade-off evaluation; ADR documentation. Use when makin | `/home/phyton/.gemini/antigravity/skills/architecture` |
| **arm-cortex-expert** | Senior embedded software engineer specializing in firmware and driver development for ARM Cortex-M microcontrollers (Tee | `/home/phyton/.gemini/antigravity/skills/arm-cortex-expert` |
| **asana-automation** | "Automate Asana tasks via Rube MCP (Composio): tasks; projects; sections; teams; workspaces. Always search tools first f | `/home/phyton/.gemini/antigravity/skills/asana-automation` |
| **async-python-patterns** | "Master Python asyncio; concurrent programming; and async/await patterns for high-performance applications. Use when bui | `/home/phyton/.gemini/antigravity/skills/async-python-patterns` |
| **attack-tree-construction** | "Build comprehensive attack trees to visualize threat paths. Use when mapping attack scenarios; identifying defense gaps | `/home/phyton/.gemini/antigravity/skills/attack-tree-construction` |
| **audio-transcriber** | "Transform audio recordings into professional Markdown documentation with intelligent summaries using LLM integration" | `/home/phyton/.gemini/antigravity/skills/audio-transcriber` |
| **auth-implementation-patterns** | "Master authentication and authorization patterns including JWT; OAuth2; session management; and RBAC to build secure; s | `/home/phyton/.gemini/antigravity/skills/auth-implementation-patterns` |
| **automate-whatsapp** | "Build WhatsApp automations with Kapso workflows: configure WhatsApp triggers; edit workflow graphs; manage executions;  | `/home/phyton/.gemini/antigravity/skills/automate-whatsapp` |
| **autonomous-agent-patterns** | "Design patterns for building autonomous coding agents. Covers tool integration; permission systems; browser automation; | `/home/phyton/.gemini/antigravity/skills/autonomous-agent-patterns` |
| **autonomous-agents** | "Autonomous agents are AI systems that can independently decompose goals; plan actions; execute tools; and self-correct  | `/home/phyton/.gemini/antigravity/skills/autonomous-agents` |
| **avalonia-layout-zafiro** | "Guidelines for modern Avalonia UI layout using Zafiro.Avalonia; emphasizing shared styles; generic components; and avoi | `/home/phyton/.gemini/antigravity/skills/avalonia-layout-zafiro` |
| **avalonia-viewmodels-zafiro** | "Optimal ViewModel and Wizard creation patterns for Avalonia using Zafiro and ReactiveUI." | `/home/phyton/.gemini/antigravity/skills/avalonia-viewmodels-zafiro` |
| **avalonia-zafiro-development** | "Mandatory skills; conventions; and behavioral rules for Avalonia UI development using the Zafiro toolkit." | `/home/phyton/.gemini/antigravity/skills/avalonia-zafiro-development` |
| **aws-cost-cleanup** | "Automated cleanup of unused AWS resources to reduce costs" | `/home/phyton/.gemini/antigravity/skills/aws-cost-cleanup` |
| **aws-cost-optimizer** | "Comprehensive AWS cost analysis and optimization recommendations using AWS CLI and Cost Explorer" | `/home/phyton/.gemini/antigravity/skills/aws-cost-optimizer` |
| **aws-penetration-testing** | "This skill should be used when the user asks to \"pentest AWS\"; \"test AWS security\"; \"enumerate IAM\"; \"exploit cl | `/home/phyton/.gemini/antigravity/skills/aws-penetration-testing` |
| **aws-serverless** | "Specialized skill for building production-ready serverless applications on AWS. Covers Lambda functions; API Gateway; D | `/home/phyton/.gemini/antigravity/skills/aws-serverless` |
| **aws-skills** | "AWS development with infrastructure automation and cloud architecture patterns" | `/home/phyton/.gemini/antigravity/skills/aws-skills` |
| **azd-deployment** | "Deploy containerized applications to Azure Container Apps using Azure Developer CLI (azd). Use when setting up azd proj | `/home/phyton/.gemini/antigravity/skills/azd-deployment` |
| **azure-ai-agents-persistent-dotnet** | Azure AI Agents Persistent SDK for .NET. Low-level SDK for creating and managing AI agents with threads; messages; runs; | `/home/phyton/.gemini/antigravity/skills/azure-ai-agents-persistent-dotnet` |
| **azure-ai-agents-persistent-java** | Azure AI Agents Persistent SDK for Java. Low-level SDK for creating and managing AI agents with threads; messages; runs; | `/home/phyton/.gemini/antigravity/skills/azure-ai-agents-persistent-java` |
| **azure-ai-anomalydetector-java** | "Build anomaly detection applications with Azure AI Anomaly Detector SDK for Java. Use when implementing univariate/mult | `/home/phyton/.gemini/antigravity/skills/azure-ai-anomalydetector-java` |
| **azure-ai-contentsafety-java** | "Build content moderation applications with Azure AI Content Safety SDK for Java. Use when implementing text/image analy | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-java` |
| **azure-ai-contentsafety-py** | Azure AI Content Safety SDK for Python. Use for detecting harmful content in text and images with multi-severity classif | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-py` |
| **azure-ai-contentsafety-ts** | "Analyze text and images for harmful content using Azure AI Content Safety (@azure-rest/ai-content-safety). Use when mod | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-ts` |
| **azure-ai-contentunderstanding-py** | Azure AI Content Understanding SDK for Python. Use for multimodal content extraction from documents; images; audio; and  | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentunderstanding-py` |
| **azure-ai-document-intelligence-dotnet** | Azure AI Document Intelligence SDK for .NET. Extract text; tables; and structured data from documents using prebuilt and | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-dotnet` |
| **azure-ai-document-intelligence-ts** | "Extract text; tables; and structured data from documents using Azure Document Intelligence (@azure-rest/ai-document-int | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-ts` |
| **azure-ai-formrecognizer-java** | "Build document analysis applications with Azure Document Intelligence (Form Recognizer) SDK for Java. Use when extracti | `/home/phyton/.gemini/antigravity/skills/azure-ai-formrecognizer-java` |
| **azure-ai-ml-py** | Azure Machine Learning SDK v2 for Python. Use for ML workspaces; jobs; models; datasets; compute; and pipelines. | `/home/phyton/.gemini/antigravity/skills/azure-ai-ml-py` |
| **azure-ai-openai-dotnet** | Azure OpenAI SDK for .NET. Client library for Azure OpenAI and OpenAI services. Use for chat completions; embeddings; im | `/home/phyton/.gemini/antigravity/skills/azure-ai-openai-dotnet` |
| **azure-ai-projects-dotnet** | Azure AI Projects SDK for .NET. High-level client for Azure AI Foundry projects including agents; connections; datasets; | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-dotnet` |
| **azure-ai-projects-java** | Azure AI Projects SDK for Java. High-level SDK for Azure AI Foundry project management including connections; datasets;  | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-java` |
| **azure-ai-projects-py** | "Build AI applications using the Azure AI Projects Python SDK (azure-ai-projects). Use when working with Foundry project | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-py` |
| **azure-ai-projects-ts** | "Build AI applications using Azure AI Projects SDK for JavaScript (@azure/ai-projects). Use when working with Foundry pr | `/home/phyton/.gemini/antigravity/skills/azure-ai-projects-ts` |
| **azure-ai-textanalytics-py** | Azure AI Text Analytics SDK for sentiment analysis; entity recognition; key phrases; language detection; PII; and health | `/home/phyton/.gemini/antigravity/skills/azure-ai-textanalytics-py` |
| **azure-ai-transcription-py** | Azure AI Transcription SDK for Python. Use for real-time and batch speech-to-text transcription with timestamps and diar | `/home/phyton/.gemini/antigravity/skills/azure-ai-transcription-py` |
| **azure-ai-translation-document-py** | Azure AI Document Translation SDK for batch translation of documents with format preservation. Use for translating Word; | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-document-py` |
| **azure-ai-translation-text-py** | Azure AI Text Translation SDK for real-time text translation; transliteration; language detection; and dictionary lookup | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-text-py` |
| **azure-ai-translation-ts** | "Build translation applications using Azure Translation SDKs for JavaScript (@azure-rest/ai-translation-text; @azure-res | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-ts` |
| **azure-ai-vision-imageanalysis-java** | "Build image analysis applications with Azure AI Vision SDK for Java. Use when implementing image captioning; OCR text e | `/home/phyton/.gemini/antigravity/skills/azure-ai-vision-imageanalysis-java` |
| **azure-ai-vision-imageanalysis-py** | Azure AI Vision Image Analysis SDK for captions; tags; objects; OCR; people detection; and smart cropping. Use for compu | `/home/phyton/.gemini/antigravity/skills/azure-ai-vision-imageanalysis-py` |
| **azure-ai-voicelive-dotnet** | Azure AI Voice Live SDK for .NET. Build real-time voice AI applications with bidirectional WebSocket communication. | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-dotnet` |
| **azure-ai-voicelive-java** | Azure AI VoiceLive SDK for Java. Real-time bidirectional voice conversations with AI assistants using WebSocket. | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-java` |
| **azure-ai-voicelive-py** | "Build real-time voice AI applications using Azure AI Voice Live SDK (azure-ai-voicelive). Use this skill when creating  | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-py` |
| **azure-ai-voicelive-ts** | Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket co | `/home/phyton/.gemini/antigravity/skills/azure-ai-voicelive-ts` |
| **azure-appconfiguration-java** | Azure App Configuration SDK for Java. Centralized application configuration management with key-value settings; feature  | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-java` |
| **azure-appconfiguration-py** | Azure App Configuration SDK for Python. Use for centralized configuration management; feature flags; and dynamic setting | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-py` |
| **azure-appconfiguration-ts** | "Build applications using Azure App Configuration SDK for JavaScript (@azure/app-configuration). Use when working with c | `/home/phyton/.gemini/antigravity/skills/azure-appconfiguration-ts` |
| **azure-communication-callautomation-java** | "Build call automation workflows with Azure Communication Services Call Automation Java SDK. Use when implementing IVR s | `/home/phyton/.gemini/antigravity/skills/azure-communication-callautomation-java` |
| **azure-communication-callingserver-java** | "Azure Communication Services CallingServer (legacy) Java SDK. Note - This SDK is deprecated. Use azure-communication-ca | `/home/phyton/.gemini/antigravity/skills/azure-communication-callingserver-java` |
| **azure-communication-chat-java** | "Build real-time chat applications with Azure Communication Services Chat Java SDK. Use when implementing chat threads;  | `/home/phyton/.gemini/antigravity/skills/azure-communication-chat-java` |
| **azure-communication-common-java** | "Azure Communication Services common utilities for Java. Use when working with CommunicationTokenCredential; user identi | `/home/phyton/.gemini/antigravity/skills/azure-communication-common-java` |
| **azure-communication-sms-java** | "Send SMS messages with Azure Communication Services SMS Java SDK. Use when implementing SMS notifications; alerts; OTP  | `/home/phyton/.gemini/antigravity/skills/azure-communication-sms-java` |
| **azure-compute-batch-java** | Azure Batch SDK for Java. Run large-scale parallel and HPC batch jobs with pools; jobs; tasks; and compute nodes. | `/home/phyton/.gemini/antigravity/skills/azure-compute-batch-java` |
| **azure-containerregistry-py** | Azure Container Registry SDK for Python. Use for managing container images; artifacts; and repositories. | `/home/phyton/.gemini/antigravity/skills/azure-containerregistry-py` |
| **azure-cosmos-db-py** | "Build Azure Cosmos DB NoSQL services with Python/FastAPI following production-grade patterns. Use when implementing dat | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-db-py` |
| **azure-cosmos-java** | Azure Cosmos DB SDK for Java. NoSQL database operations with global distribution; multi-model support; and reactive patt | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-java` |
| **azure-cosmos-py** | Azure Cosmos DB SDK for Python (NoSQL API). Use for document CRUD; queries; containers; and globally distributed data. | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-py` |
| **azure-cosmos-rust** | Azure Cosmos DB SDK for Rust (NoSQL API). Use for document CRUD; queries; containers; and globally distributed data. | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-rust` |
| **azure-cosmos-ts** | Azure Cosmos DB JavaScript/TypeScript SDK (@azure/cosmos) for data plane operations. Use for CRUD operations on document | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-ts` |
| **azure-data-tables-java** | "Build table storage applications with Azure Tables SDK for Java. Use when working with Azure Table Storage or Cosmos DB | `/home/phyton/.gemini/antigravity/skills/azure-data-tables-java` |
| **azure-data-tables-py** | Azure Tables SDK for Python (Storage and Cosmos DB). Use for NoSQL key-value storage; entity CRUD; and batch operations. | `/home/phyton/.gemini/antigravity/skills/azure-data-tables-py` |
| **azure-eventgrid-dotnet** | Azure Event Grid SDK for .NET. Client library for publishing and consuming events with Azure Event Grid. Use for event-d | `/home/phyton/.gemini/antigravity/skills/azure-eventgrid-dotnet` |
| **azure-eventgrid-java** | "Build event-driven applications with Azure Event Grid SDK for Java. Use when publishing events; implementing pub/sub pa | `/home/phyton/.gemini/antigravity/skills/azure-eventgrid-java` |
| **azure-eventgrid-py** | Azure Event Grid SDK for Python. Use for publishing events; handling CloudEvents; and event-driven architectures. | `/home/phyton/.gemini/antigravity/skills/azure-eventgrid-py` |
| **azure-eventhub-dotnet** | Azure Event Hubs SDK for .NET. | `/home/phyton/.gemini/antigravity/skills/azure-eventhub-dotnet` |
| **azure-eventhub-java** | "Build real-time streaming applications with Azure Event Hubs SDK for Java. Use when implementing event streaming; high- | `/home/phyton/.gemini/antigravity/skills/azure-eventhub-java` |
| **azure-eventhub-py** | Azure Event Hubs SDK for Python streaming. Use for high-throughput event ingestion; producers; consumers; and checkpoint | `/home/phyton/.gemini/antigravity/skills/azure-eventhub-py` |
| **azure-eventhub-rust** | Azure Event Hubs SDK for Rust. Use for sending and receiving events; streaming data ingestion. | `/home/phyton/.gemini/antigravity/skills/azure-eventhub-rust` |
| **azure-eventhub-ts** | "Build event streaming applications using Azure Event Hubs SDK for JavaScript (@azure/event-hubs). Use when implementing | `/home/phyton/.gemini/antigravity/skills/azure-eventhub-ts` |
| **azure-functions** | "Expert patterns for Azure Functions development including isolated worker model; Durable Functions orchestration; cold  | `/home/phyton/.gemini/antigravity/skills/azure-functions` |
| **azure-identity-dotnet** | Azure Identity SDK for .NET. Authentication library for Azure SDK clients using Microsoft Entra ID. Use for DefaultAzure | `/home/phyton/.gemini/antigravity/skills/azure-identity-dotnet` |
| **azure-identity-java** | "Azure Identity Java SDK for authentication with Azure services. Use when implementing DefaultAzureCredential; managed i | `/home/phyton/.gemini/antigravity/skills/azure-identity-java` |
| **azure-identity-py** | Azure Identity SDK for Python authentication. Use for DefaultAzureCredential; managed identity; service principals; and  | `/home/phyton/.gemini/antigravity/skills/azure-identity-py` |
| **azure-identity-rust** | Azure Identity SDK for Rust authentication. Use for DeveloperToolsCredential; ManagedIdentityCredential; ClientSecretCre | `/home/phyton/.gemini/antigravity/skills/azure-identity-rust` |
| **azure-identity-ts** | "Authenticate to Azure services using Azure Identity SDK for JavaScript (@azure/identity). Use when configuring authenti | `/home/phyton/.gemini/antigravity/skills/azure-identity-ts` |
| **azure-keyvault-certificates-rust** | Azure Key Vault Certificates SDK for Rust. Use for creating; importing; and managing certificates. | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-certificates-rust` |
| **azure-keyvault-keys-rust** | 'Azure Key Vault Keys SDK for Rust. Use for creating; managing; and using cryptographic keys. Triggers: "keyvault keys r | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-keys-rust` |
| **azure-keyvault-keys-ts** | "Manage cryptographic keys using Azure Key Vault Keys SDK for JavaScript (@azure/keyvault-keys). Use when creating; encr | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-keys-ts` |
| **azure-keyvault-py** | Azure Key Vault SDK for Python. Use for secrets; keys; and certificates management with secure storage. | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-py` |
| **azure-keyvault-secrets-rust** | 'Azure Key Vault Secrets SDK for Rust. Use for storing and retrieving secrets; passwords; and API keys. Triggers: "keyva | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-secrets-rust` |
| **azure-keyvault-secrets-ts** | "Manage secrets using Azure Key Vault Secrets SDK for JavaScript (@azure/keyvault-secrets). Use when storing and retriev | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-secrets-ts` |
| **azure-maps-search-dotnet** | Azure Maps SDK for .NET. Location-based services including geocoding; routing; rendering; geolocation; and weather. Use  | `/home/phyton/.gemini/antigravity/skills/azure-maps-search-dotnet` |
| **azure-messaging-webpubsub-java** | "Build real-time web applications with Azure Web PubSub SDK for Java. Use when implementing WebSocket-based messaging; l | `/home/phyton/.gemini/antigravity/skills/azure-messaging-webpubsub-java` |
| **azure-messaging-webpubsubservice-py** | Azure Web PubSub Service SDK for Python. Use for real-time messaging; WebSocket connections; and pub/sub patterns. | `/home/phyton/.gemini/antigravity/skills/azure-messaging-webpubsubservice-py` |
| **azure-mgmt-apicenter-dotnet** | Azure API Center SDK for .NET. Centralized API inventory management with governance; versioning; and discovery. | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-apicenter-dotnet` |
| **azure-mgmt-apicenter-py** | Azure API Center Management SDK for Python. Use for managing API inventory; metadata; and governance across your organiz | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-apicenter-py` |
| **azure-mgmt-apimanagement-dotnet** | Azure Resource Manager SDK for API Management in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-apimanagement-dotnet` |
| **azure-mgmt-apimanagement-py** | Azure API Management SDK for Python. Use for managing APIM services; APIs; products; subscriptions; and policies. | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-apimanagement-py` |
| **azure-mgmt-applicationinsights-dotnet** | Azure Application Insights SDK for .NET. Application performance monitoring and observability resource management. | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-applicationinsights-dotnet` |
| **azure-mgmt-arizeaiobservabilityeval-dotnet** | Azure Resource Manager SDK for Arize AI Observability and Evaluation (.NET). | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-arizeaiobservabilityeval-dotnet` |
| **azure-mgmt-botservice-dotnet** | Azure Resource Manager SDK for Bot Service in .NET. Management plane operations for creating and managing Azure Bot reso | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-botservice-dotnet` |
| **azure-mgmt-botservice-py** | Azure Bot Service Management SDK for Python. Use for creating; managing; and configuring Azure Bot Service resources. | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-botservice-py` |
| **azure-mgmt-fabric-dotnet** | Azure Resource Manager SDK for Fabric in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-fabric-dotnet` |
| **azure-mgmt-fabric-py** | Azure Fabric Management SDK for Python. Use for managing Microsoft Fabric capacities and resources. | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-fabric-py` |
| **azure-mgmt-mongodbatlas-dotnet** | "Manage MongoDB Atlas Organizations as Azure ARM resources using Azure.ResourceManager.MongoDBAtlas SDK. Use when creati | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-mongodbatlas-dotnet` |
| **azure-mgmt-weightsandbiases-dotnet** | Azure Weights & Biases SDK for .NET. ML experiment tracking and model management via Azure Marketplace. Use for creating | `/home/phyton/.gemini/antigravity/skills/azure-mgmt-weightsandbiases-dotnet` |
| **azure-microsoft-playwright-testing-ts** | "Run Playwright tests at scale using Azure Playwright Workspaces (formerly Microsoft Playwright Testing). Use when scali | `/home/phyton/.gemini/antigravity/skills/azure-microsoft-playwright-testing-ts` |
| **azure-monitor-ingestion-java** | Azure Monitor Ingestion SDK for Java. Send custom logs to Azure Monitor via Data Collection Rules (DCR) and Data Collect | `/home/phyton/.gemini/antigravity/skills/azure-monitor-ingestion-java` |
| **azure-monitor-ingestion-py** | Azure Monitor Ingestion SDK for Python. Use for sending custom logs to Log Analytics workspace via Logs Ingestion API. | `/home/phyton/.gemini/antigravity/skills/azure-monitor-ingestion-py` |
| **azure-monitor-opentelemetry-exporter-java** | Azure Monitor OpenTelemetry Exporter for Java. Export OpenTelemetry traces; metrics; and logs to Azure Monitor/Applicati | `/home/phyton/.gemini/antigravity/skills/azure-monitor-opentelemetry-exporter-java` |
| **azure-monitor-opentelemetry-exporter-py** | Azure Monitor OpenTelemetry Exporter for Python. Use for low-level OpenTelemetry export to Application Insights. | `/home/phyton/.gemini/antigravity/skills/azure-monitor-opentelemetry-exporter-py` |
| **azure-monitor-opentelemetry-py** | Azure Monitor OpenTelemetry Distro for Python. Use for one-line Application Insights setup with auto-instrumentation. | `/home/phyton/.gemini/antigravity/skills/azure-monitor-opentelemetry-py` |
| **azure-monitor-opentelemetry-ts** | "Instrument applications with Azure Monitor and OpenTelemetry for JavaScript (@azure/monitor-opentelemetry). Use when ad | `/home/phyton/.gemini/antigravity/skills/azure-monitor-opentelemetry-ts` |
| **azure-monitor-query-java** | Azure Monitor Query SDK for Java. Execute Kusto queries against Log Analytics workspaces and query metrics from Azure re | `/home/phyton/.gemini/antigravity/skills/azure-monitor-query-java` |
| **azure-monitor-query-py** | Azure Monitor Query SDK for Python. Use for querying Log Analytics workspaces and Azure Monitor metrics. | `/home/phyton/.gemini/antigravity/skills/azure-monitor-query-py` |
| **azure-postgres-ts** | Connect to Azure Database for PostgreSQL Flexible Server from Node.js/TypeScript using the pg (node-postgres) package. | `/home/phyton/.gemini/antigravity/skills/azure-postgres-ts` |
| **azure-resource-manager-cosmosdb-dotnet** | Azure Resource Manager SDK for Cosmos DB in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-cosmosdb-dotnet` |
| **azure-resource-manager-durabletask-dotnet** | Azure Resource Manager SDK for Durable Task Scheduler in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-durabletask-dotnet` |
| **azure-resource-manager-mysql-dotnet** | Azure MySQL Flexible Server SDK for .NET. Database management for MySQL Flexible Server deployments. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-mysql-dotnet` |
| **azure-resource-manager-playwright-dotnet** | Azure Resource Manager SDK for Microsoft Playwright Testing in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-playwright-dotnet` |
| **azure-resource-manager-postgresql-dotnet** | Azure PostgreSQL Flexible Server SDK for .NET. Database management for PostgreSQL Flexible Server deployments. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-postgresql-dotnet` |
| **azure-resource-manager-redis-dotnet** | Azure Resource Manager SDK for Redis in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-redis-dotnet` |
| **azure-resource-manager-sql-dotnet** | Azure Resource Manager SDK for Azure SQL in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-sql-dotnet` |
| **azure-search-documents-dotnet** | Azure AI Search SDK for .NET (Azure.Search.Documents). Use for building search applications with full-text; vector; sema | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-dotnet` |
| **azure-search-documents-py** | Azure AI Search SDK for Python. Use for vector search; hybrid search; semantic ranking; indexing; and skillsets. | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-py` |
| **azure-search-documents-ts** | "Build search applications using Azure AI Search SDK for JavaScript (@azure/search-documents). Use when creating/managin | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-ts` |
| **azure-security-keyvault-keys-dotnet** | Azure Key Vault Keys SDK for .NET. Client library for managing cryptographic keys in Azure Key Vault and Managed HSM. Us | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-keys-dotnet` |
| **azure-security-keyvault-keys-java** | "Azure Key Vault Keys Java SDK for cryptographic key management. Use when creating; managing; or using RSA/EC keys; perf | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-keys-java` |
| **azure-security-keyvault-secrets-java** | "Azure Key Vault Secrets Java SDK for secret management. Use when storing; retrieving; or managing passwords; API keys;  | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-secrets-java` |
| **azure-servicebus-dotnet** | Azure Service Bus SDK for .NET. Enterprise messaging with queues; topics; subscriptions; and sessions. | `/home/phyton/.gemini/antigravity/skills/azure-servicebus-dotnet` |
| **azure-servicebus-py** | Azure Service Bus SDK for Python messaging. Use for queues; topics; subscriptions; and enterprise messaging patterns. | `/home/phyton/.gemini/antigravity/skills/azure-servicebus-py` |
| **azure-servicebus-ts** | "Build messaging applications using Azure Service Bus SDK for JavaScript (@azure/service-bus). Use when implementing que | `/home/phyton/.gemini/antigravity/skills/azure-servicebus-ts` |
| **azure-speech-to-text-rest-py** | Azure Speech to Text REST API for short audio (Python). Use for simple speech recognition of audio files up to 60 second | `/home/phyton/.gemini/antigravity/skills/azure-speech-to-text-rest-py` |
| **azure-storage-blob-java** | "Build blob storage applications with Azure Storage Blob SDK for Java. Use when uploading; downloading; or managing file | `/home/phyton/.gemini/antigravity/skills/azure-storage-blob-java` |
| **azure-storage-blob-py** | Azure Blob Storage SDK for Python. Use for uploading; downloading; listing blobs; managing containers; and blob lifecycl | `/home/phyton/.gemini/antigravity/skills/azure-storage-blob-py` |
| **azure-storage-blob-rust** | Azure Blob Storage SDK for Rust. Use for uploading; downloading; and managing blobs and containers. | `/home/phyton/.gemini/antigravity/skills/azure-storage-blob-rust` |
| **azure-storage-blob-ts** | Azure Blob Storage JavaScript/TypeScript SDK (@azure/storage-blob) for blob operations. Use for uploading; downloading;  | `/home/phyton/.gemini/antigravity/skills/azure-storage-blob-ts` |
| **azure-storage-file-datalake-py** | Azure Data Lake Storage Gen2 SDK for Python. Use for hierarchical file systems; big data analytics; and file/directory o | `/home/phyton/.gemini/antigravity/skills/azure-storage-file-datalake-py` |
| **azure-storage-file-share-py** | Azure Storage File Share SDK for Python. Use for SMB file shares; directories; and file operations in the cloud. | `/home/phyton/.gemini/antigravity/skills/azure-storage-file-share-py` |
| **azure-storage-file-share-ts** | Azure File Share JavaScript/TypeScript SDK (@azure/storage-file-share) for SMB file share operations. | `/home/phyton/.gemini/antigravity/skills/azure-storage-file-share-ts` |
| **azure-storage-queue-py** | Azure Queue Storage SDK for Python. Use for reliable message queuing; task distribution; and asynchronous processing. | `/home/phyton/.gemini/antigravity/skills/azure-storage-queue-py` |
| **azure-storage-queue-ts** | Azure Queue Storage JavaScript/TypeScript SDK (@azure/storage-queue) for message queue operations. Use for sending; rece | `/home/phyton/.gemini/antigravity/skills/azure-storage-queue-ts` |
| **azure-web-pubsub-ts** | "Build real-time messaging applications using Azure Web PubSub SDKs for JavaScript (@azure/web-pubsub; @azure/web-pubsub | `/home/phyton/.gemini/antigravity/skills/azure-web-pubsub-ts` |
| **backend-architect** | Expert backend architect specializing in scalable API design; microservices architecture; and distributed systems. | `/home/phyton/.gemini/antigravity/skills/backend-architect` |
| **backend-development-feature-development** | "Orchestrate end-to-end backend feature development from requirements to deployment. Use when coordinating multi-phase f | `/home/phyton/.gemini/antigravity/skills/backend-development-feature-development` |
| **backend-dev-guidelines** | "Opinionated backend development standards for Node.js + Express + TypeScript microservices. Covers layered architecture | `/home/phyton/.gemini/antigravity/skills/backend-dev-guidelines` |
| **backend-security-coder** | Expert in secure backend coding practices specializing in input validation; authentication; and API security. Use PROACT | `/home/phyton/.gemini/antigravity/skills/backend-security-coder` |
| **backtesting-frameworks** | "Build robust backtesting systems for trading strategies with proper handling of look-ahead bias; survivorship bias; and | `/home/phyton/.gemini/antigravity/skills/backtesting-frameworks` |
| **bamboohr-automation** | "Automate BambooHR tasks via Rube MCP (Composio): employees; time-off; benefits; dependents; employee updates. Always se | `/home/phyton/.gemini/antigravity/skills/bamboohr-automation` |
| **basecamp-automation** | "Automate Basecamp project management; to-dos; messages; people; and to-do list organization via Rube MCP (Composio). Al | `/home/phyton/.gemini/antigravity/skills/basecamp-automation` |
| **bash-defensive-patterns** | "Master defensive Bash programming techniques for production-grade scripts. Use when writing robust shell scripts; CI/CD | `/home/phyton/.gemini/antigravity/skills/bash-defensive-patterns` |
| **bash-linux** | "Bash/Linux terminal patterns. Critical commands; piping; error handling; scripting. Use when working on macOS or Linux  | `/home/phyton/.gemini/antigravity/skills/bash-linux` |
| **bash-pro** | 'Master of defensive Bash scripting for production automation; CI/CD | `/home/phyton/.gemini/antigravity/skills/bash-pro` |
| **bash-scripting** | "Bash scripting workflow for creating production-ready shell scripts with defensive patterns; error handling; and testin | `/home/phyton/.gemini/antigravity/skills/bash-scripting` |
| **bats-testing-patterns** | "Master Bash Automated Testing System (Bats) for comprehensive shell script testing. Use when writing tests for shell sc | `/home/phyton/.gemini/antigravity/skills/bats-testing-patterns` |
| **bazel-build-optimization** | "Optimize Bazel builds for large-scale monorepos. Use when configuring Bazel; implementing remote execution; or optimizi | `/home/phyton/.gemini/antigravity/skills/bazel-build-optimization` |
| **beautiful-prose** | "Hard-edged writing style contract for timeless; forceful English prose without AI tics" | `/home/phyton/.gemini/antigravity/skills/beautiful-prose` |
| **behavioral-modes** | "AI operational modes (brainstorm; implement; debug; review; teach; ship; orchestrate). Use to adapt behavior based on t | `/home/phyton/.gemini/antigravity/skills/behavioral-modes` |
| **bevy-ecs-expert** | "Master Bevy's Entity Component System (ECS) in Rust; covering Systems; Queries; Resources; and parallel scheduling." | `/home/phyton/.gemini/antigravity/skills/bevy-ecs-expert` |
| **billing-automation** | "Build automated billing systems for recurring payments; invoicing; subscription lifecycle; and dunning management. Use  | `/home/phyton/.gemini/antigravity/skills/billing-automation` |
| **binary-analysis-patterns** | "Master binary analysis patterns including disassembly; decompilation; control flow analysis; and code pattern recogniti | `/home/phyton/.gemini/antigravity/skills/binary-analysis-patterns` |
| **bitbucket-automation** | "Automate Bitbucket repositories; pull requests; branches; issues; and workspace management via Rube MCP (Composio). Alw | `/home/phyton/.gemini/antigravity/skills/bitbucket-automation` |
| **blockchain-developer** | Build production-ready Web3 applications; smart contracts; and decentralized systems. Implements DeFi protocols; NFT pla | `/home/phyton/.gemini/antigravity/skills/blockchain-developer` |
| **blockrun** | "Use when user needs capabilities Claude lacks (image generation; real-time X/Twitter data) or explicitly requests exter | `/home/phyton/.gemini/antigravity/skills/blockrun` |
| **box-automation** | "Automate Box cloud storage operations including file upload/download; search; folder management; sharing; collaboration | `/home/phyton/.gemini/antigravity/skills/box-automation` |
| **brainstorming** | "Use before creative or constructive work (features; architecture; behavior). Transforms vague ideas into validated desi | `/home/phyton/.gemini/antigravity/skills/brainstorming` |
| **brand-guidelines-anthropic** | "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic | `/home/phyton/.gemini/antigravity/skills/brand-guidelines-anthropic` |
| **brand-guidelines-community** | "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic | `/home/phyton/.gemini/antigravity/skills/brand-guidelines-community` |
| **brevo-automation** | "Automate Brevo (Sendinblue) tasks via Rube MCP (Composio): manage email campaigns; create/edit templates; track senders | `/home/phyton/.gemini/antigravity/skills/brevo-automation` |
| **broken-authentication** | "This skill should be used when the user asks to \"test for broken authentication vulnerabilities\"; \"assess session ma | `/home/phyton/.gemini/antigravity/skills/broken-authentication` |
| **browser-automation** | "Browser automation powers web testing; scraping; and AI agent interactions. The difference between a flaky script and a | `/home/phyton/.gemini/antigravity/skills/browser-automation` |
| **browser-extension-builder** | "Expert in building browser extensions that solve real problems - Chrome; Firefox; and cross-browser extensions. Covers  | `/home/phyton/.gemini/antigravity/skills/browser-extension-builder` |
| **bullmq-specialist** | "BullMQ expert for Redis-backed job queues; background processing; and reliable async execution in Node.js/TypeScript ap | `/home/phyton/.gemini/antigravity/skills/bullmq-specialist` |
| **burp-suite-testing** | "This skill should be used when the user asks to \"intercept HTTP traffic\"; \"modify web requests\"; \"use Burp Suite f | `/home/phyton/.gemini/antigravity/skills/burp-suite-testing` |
| **business-analyst** | Master modern business analysis with AI-powered analytics; real-time dashboards; and data-driven insights. Build compreh | `/home/phyton/.gemini/antigravity/skills/business-analyst` |
| **busybox-on-windows** | "How to use a Win32 build of BusyBox to run many of the standard UNIX command line tools on Windows." | `/home/phyton/.gemini/antigravity/skills/busybox-on-windows` |
| **c4-architecture-c4-architecture** | "Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis app | `/home/phyton/.gemini/antigravity/skills/c4-architecture-c4-architecture` |
| **c4-code** | Expert C4 Code-level documentation specialist. Analyzes code directories to create comprehensive C4 code-level documenta | `/home/phyton/.gemini/antigravity/skills/c4-code` |
| **c4-component** | Expert C4 Component-level documentation specialist. Synthesizes C4 Code-level documentation into Component-level archite | `/home/phyton/.gemini/antigravity/skills/c4-component` |
| **c4-container** | Expert C4 Container-level documentation specialist. | `/home/phyton/.gemini/antigravity/skills/c4-container` |
| **c4-context** | Expert C4 Context-level documentation specialist. Creates high-level system context diagrams; documents personas; user j | `/home/phyton/.gemini/antigravity/skills/c4-context` |
| **cal-com-automation** | "Automate Cal.com tasks via Rube MCP (Composio): manage bookings; check availability; configure webhooks; and handle tea | `/home/phyton/.gemini/antigravity/skills/cal-com-automation` |
| **calendly-automation** | "Automate Calendly scheduling; event management; invitee tracking; availability checks; and organization administration  | `/home/phyton/.gemini/antigravity/skills/calendly-automation` |
| **carrier-relationship-management** | Codified expertise for managing carrier portfolios; negotiating freight rates; tracking carrier performance; allocating  | `/home/phyton/.gemini/antigravity/skills/carrier-relationship-management` |
| **cc-skill-backend-patterns** | "Backend architecture patterns; API design; database optimization; and server-side best practices for Node.js; Express;  | `/home/phyton/.gemini/antigravity/skills/cc-skill-backend-patterns` |
| **cc-skill-clickhouse-io** | "ClickHouse database patterns; query optimization; analytics; and data engineering best practices for high-performance a | `/home/phyton/.gemini/antigravity/skills/cc-skill-clickhouse-io` |
| **cc-skill-coding-standards** | "Universal coding standards; best practices; and patterns for TypeScript; JavaScript; React; and Node.js development." | `/home/phyton/.gemini/antigravity/skills/cc-skill-coding-standards` |
| **cc-skill-continuous-learning** | "Development skill from everything-claude-code" | `/home/phyton/.gemini/antigravity/skills/cc-skill-continuous-learning` |
| **cc-skill-frontend-patterns** | "Frontend development patterns for React; Next.js; state management; performance optimization; and UI best practices." | `/home/phyton/.gemini/antigravity/skills/cc-skill-frontend-patterns` |
| **cc-skill-project-guidelines-example** | "Project Guidelines Skill (Example)" | `/home/phyton/.gemini/antigravity/skills/cc-skill-project-guidelines-example` |
| **cc-skill-security-review** | "Use this skill when adding authentication; handling user input; working with secrets; creating API endpoints; or implem | `/home/phyton/.gemini/antigravity/skills/cc-skill-security-review` |
| **cc-skill-strategic-compact** | "Development skill from everything-claude-code" | `/home/phyton/.gemini/antigravity/skills/cc-skill-strategic-compact` |
| **cdk-patterns** | "Common AWS CDK patterns and constructs for building cloud infrastructure with TypeScript; Python; or Java. Use when des | `/home/phyton/.gemini/antigravity/skills/cdk-patterns` |
| **changelog-automation** | "Automate changelog generation from commits; PRs; and releases following Keep a Changelog format. Use when setting up re | `/home/phyton/.gemini/antigravity/skills/changelog-automation` |
| **chrome-extension-developer** | "Expert in building Chrome Extensions using Manifest V3. Covers background scripts; service workers; content scripts; an | `/home/phyton/.gemini/antigravity/skills/chrome-extension-developer` |
| **cicd-automation-workflow-automate** | "You are a workflow automation expert specializing in creating efficient CI/CD pipelines; GitHub Actions workflows; and  | `/home/phyton/.gemini/antigravity/skills/cicd-automation-workflow-automate` |
| **circleci-automation** | "Automate CircleCI tasks via Rube MCP (Composio): trigger pipelines; monitor workflows/jobs; retrieve artifacts and test | `/home/phyton/.gemini/antigravity/skills/circleci-automation` |
| **clarity-gate** | "Pre-ingestion verification for epistemic quality in RAG systems with 9-point verification and Two-Round HITL workflow" | `/home/phyton/.gemini/antigravity/skills/clarity-gate` |
| **claude-ally-health** | "A health assistant skill for medical information analysis; symptom tracking; and wellness guidance." | `/home/phyton/.gemini/antigravity/skills/claude-ally-health` |
| **claude-code-guide** | "Master guide for using Claude Code effectively. Includes configuration templates; prompting strategies \\\"Thinking\\\" | `/home/phyton/.gemini/antigravity/skills/claude-code-guide` |
| **claude-d3js-skill** | "Creating interactive data visualisations using d3.js. This skill should be used when creating custom charts; graphs; ne | `/home/phyton/.gemini/antigravity/skills/claude-d3js-skill` |
| **claude-scientific-skills** | "Scientific research and analysis skills" | `/home/phyton/.gemini/antigravity/skills/claude-scientific-skills` |
| **claude-speed-reader** | "-Speed read Claude's responses at 600+ WPM using RSVP with Spritz-style ORP highlighting" | `/home/phyton/.gemini/antigravity/skills/claude-speed-reader` |
| **claude-win11-speckit-update-skill** | "Windows 11 system management" | `/home/phyton/.gemini/antigravity/skills/claude-win11-speckit-update-skill` |
| **clean-code** | "Applies principles from Robert C. Martin's 'Clean Code'. Use this skill when writing; reviewing; or refactoring code to | `/home/phyton/.gemini/antigravity/skills/clean-code` |
| **clerk-auth** | "Expert patterns for Clerk auth implementation; middleware; organizations; webhooks; and user sync Use when: adding auth | `/home/phyton/.gemini/antigravity/skills/clerk-auth` |
| **clickup-automation** | "Automate ClickUp project management including tasks; spaces; folders; lists; comments; and team operations via Rube MCP | `/home/phyton/.gemini/antigravity/skills/clickup-automation` |
| **close-automation** | "Automate Close CRM tasks via Rube MCP (Composio): create leads; manage calls/SMS; handle tasks; and track notes. Always | `/home/phyton/.gemini/antigravity/skills/close-automation` |
| **cloud-architect** | Expert cloud architect specializing in AWS/Azure/GCP multi-cloud infrastructure design; advanced IaC (Terraform/OpenTofu | `/home/phyton/.gemini/antigravity/skills/cloud-architect` |
| **cloud-devops** | "Cloud infrastructure and DevOps workflow covering AWS; Azure; GCP; Kubernetes; Terraform; CI/CD; monitoring; and cloud- | `/home/phyton/.gemini/antigravity/skills/cloud-devops` |
| **cloudflare-workers-expert** | "Expert in Cloudflare Workers and the Edge Computing ecosystem. Covers Wrangler; KV; D1; Durable Objects; and R2 storage | `/home/phyton/.gemini/antigravity/skills/cloudflare-workers-expert` |
| **cloudformation-best-practices** | "CloudFormation template optimization; nested stacks; drift detection; and production-ready patterns. Use when writing o | `/home/phyton/.gemini/antigravity/skills/cloudformation-best-practices` |
| **cloud-penetration-testing** | "This skill should be used when the user asks to \"perform cloud penetration testing\"; \"assess Azure or AWS or GCP sec | `/home/phyton/.gemini/antigravity/skills/cloud-penetration-testing` |
| **coda-automation** | "Automate Coda tasks via Rube MCP (Composio): manage docs; pages; tables; rows; formulas; permissions; and publishing. A | `/home/phyton/.gemini/antigravity/skills/coda-automation` |
| **codebase-cleanup-deps-audit** | "You are a dependency security expert specializing in vulnerability scanning; license compliance; and supply chain secur | `/home/phyton/.gemini/antigravity/skills/codebase-cleanup-deps-audit` |
| **codebase-cleanup-refactor-clean** | "You are a code refactoring expert specializing in clean code principles; SOLID design patterns; and modern software eng | `/home/phyton/.gemini/antigravity/skills/codebase-cleanup-refactor-clean` |
| **codebase-cleanup-tech-debt** | "You are a technical debt expert specializing in identifying; quantifying; and prioritizing technical debt in software p | `/home/phyton/.gemini/antigravity/skills/codebase-cleanup-tech-debt` |
| **code-documentation-code-explain** | "You are a code education expert specializing in explaining complex code through clear narratives; visual diagrams; and  | `/home/phyton/.gemini/antigravity/skills/code-documentation-code-explain` |
| **code-documentation-doc-generate** | "You are a documentation expert specializing in creating comprehensive; maintainable documentation from code. Generate A | `/home/phyton/.gemini/antigravity/skills/code-documentation-doc-generate` |
| **code-refactoring-context-restore** | "Use when working with code refactoring context restore" | `/home/phyton/.gemini/antigravity/skills/code-refactoring-context-restore` |
| **code-refactoring-refactor-clean** | "You are a code refactoring expert specializing in clean code principles; SOLID design patterns; and modern software eng | `/home/phyton/.gemini/antigravity/skills/code-refactoring-refactor-clean` |
| **code-refactoring-tech-debt** | "You are a technical debt expert specializing in identifying; quantifying; and prioritizing technical debt in software p | `/home/phyton/.gemini/antigravity/skills/code-refactoring-tech-debt` |
| **code-review-ai-ai-review** | "You are an expert AI-powered code review specialist combining automated static analysis; intelligent pattern recognitio | `/home/phyton/.gemini/antigravity/skills/code-review-ai-ai-review` |
| **code-review-checklist** | "Comprehensive checklist for conducting thorough code reviews covering functionality; security; performance; and maintai | `/home/phyton/.gemini/antigravity/skills/code-review-checklist` |
| **code-reviewer** | "Elite code review expert specializing in modern AI-powered code" | `/home/phyton/.gemini/antigravity/skills/code-reviewer` |
| **code-review-excellence** | "Master effective code review practices to provide constructive feedback; catch bugs early; and foster knowledge sharing | `/home/phyton/.gemini/antigravity/skills/code-review-excellence` |
| **codex-review** | "Professional code review with auto CHANGELOG generation; integrated with Codex AI" | `/home/phyton/.gemini/antigravity/skills/codex-review` |
| **commit** | "Create commit messages following Sentry conventions. Use when committing code changes; writing commit messages; or form | `/home/phyton/.gemini/antigravity/skills/commit` |
| **competitive-landscape** | This skill should be used when the user asks to \\\"analyze competitors"; "assess competitive landscape"; "identify diff | `/home/phyton/.gemini/antigravity/skills/competitive-landscape` |
| **competitor-alternatives** | "When the user wants to create competitor comparison or alternative pages for SEO and sales enablement. Also use when th | `/home/phyton/.gemini/antigravity/skills/competitor-alternatives` |
| **comprehensive-review-full-review** | "Use when working with comprehensive review full review" | `/home/phyton/.gemini/antigravity/skills/comprehensive-review-full-review` |
| **comprehensive-review-pr-enhance** | "You are a PR optimization expert specializing in creating high-quality pull requests that facilitate efficient code rev | `/home/phyton/.gemini/antigravity/skills/comprehensive-review-pr-enhance` |
| **computer-use-agents** | "Build AI agents that interact with computers like humans do - viewing screens; moving cursors; clicking buttons; and ty | `/home/phyton/.gemini/antigravity/skills/computer-use-agents` |
| **computer-vision-expert** | "SOTA Computer Vision Expert (2026). Specialized in YOLO26; Segment Anything 3 (SAM 3); Vision Language Models; and real | `/home/phyton/.gemini/antigravity/skills/computer-vision-expert` |
| **concise-planning** | "Use when a user asks for a plan for a coding task; to generate a clear; actionable; and atomic checklist." | `/home/phyton/.gemini/antigravity/skills/concise-planning` |
| **conductor-implement** | "Execute tasks from a track's implementation plan following TDD workflow" | `/home/phyton/.gemini/antigravity/skills/conductor-implement` |
| **conductor-manage** | "Manage track lifecycle: archive; restore; delete; rename; and cleanup" | `/home/phyton/.gemini/antigravity/skills/conductor-manage` |
| **conductor-new-track** | "Create a new track with specification and phased implementation plan" | `/home/phyton/.gemini/antigravity/skills/conductor-new-track` |
| **conductor-revert** | "Git-aware undo by logical work unit (track; phase; or task)" | `/home/phyton/.gemini/antigravity/skills/conductor-revert` |
| **conductor-setup** | 'Initialize project with Conductor artifacts (product definition; | `/home/phyton/.gemini/antigravity/skills/conductor-setup` |
| **conductor-status** | "Display project status; active tracks; and next actions" | `/home/phyton/.gemini/antigravity/skills/conductor-status` |
| **conductor-validator** | 'Validates Conductor project artifacts for completeness; | `/home/phyton/.gemini/antigravity/skills/conductor-validator` |
| **confluence-automation** | "Automate Confluence page creation; content search; space management; labels; and hierarchy navigation via Rube MCP (Com | `/home/phyton/.gemini/antigravity/skills/confluence-automation` |
| **content-creator** | "Create SEO-optimized marketing content with consistent brand voice. Includes brand voice analyzer; SEO optimizer; conte | `/home/phyton/.gemini/antigravity/skills/content-creator` |
| **content-marketer** | Elite content marketing strategist specializing in AI-powered content creation; omnichannel distribution; SEO optimizati | `/home/phyton/.gemini/antigravity/skills/content-marketer` |
| **context7-auto-research** | "Automatically fetch latest library/framework documentation for Claude Code via Context7 API" | `/home/phyton/.gemini/antigravity/skills/context7-auto-research` |
| **context-compression** | "Design and evaluate compression strategies for long-running sessions" | `/home/phyton/.gemini/antigravity/skills/context-compression` |
| **context-degradation** | "Recognize patterns of context failure: lost-in-middle; poisoning; distraction; and clash" | `/home/phyton/.gemini/antigravity/skills/context-degradation` |
| **context-driven-development** | Use this skill when working with Conductor's context-driven development methodology; managing project context artifacts; | `/home/phyton/.gemini/antigravity/skills/context-driven-development` |
| **context-fundamentals** | "Understand what context is; why it matters; and the anatomy of context in agent systems" | `/home/phyton/.gemini/antigravity/skills/context-fundamentals` |
| **context-management-context-restore** | "Use when working with context management context restore" | `/home/phyton/.gemini/antigravity/skills/context-management-context-restore` |
| **context-management-context-save** | "Use when working with context management context save" | `/home/phyton/.gemini/antigravity/skills/context-management-context-save` |
| **context-manager** | Elite AI context engineering specialist mastering dynamic context management; vector databases; knowledge graphs; and in | `/home/phyton/.gemini/antigravity/skills/context-manager` |
| **context-optimization** | "Apply compaction; masking; and caching strategies" | `/home/phyton/.gemini/antigravity/skills/context-optimization` |
| **context-window-management** | "Strategies for managing LLM context windows including summarization; trimming; routing; and avoiding context rot Use wh | `/home/phyton/.gemini/antigravity/skills/context-window-management` |
| **copilot-sdk** | "Build applications powered by GitHub Copilot using the Copilot SDK. Use when creating programmatic integrations with Co | `/home/phyton/.gemini/antigravity/skills/copilot-sdk` |
| **copy-editing** | "When the user wants to edit; review; or improve existing marketing copy. Also use when the user mentions 'edit this cop | `/home/phyton/.gemini/antigravity/skills/copy-editing` |
| **copywriting** | Write rigorous; conversion-focused marketing copy for landing pages and emails. Enforces brief confirmation and strict n | `/home/phyton/.gemini/antigravity/skills/copywriting` |
| **core-components** | "Core component library and design system patterns. Use when building UI; using design tokens; or working with the compo | `/home/phyton/.gemini/antigravity/skills/core-components` |
| **cost-optimization** | "Optimize cloud costs through resource rightsizing; tagging strategies; reserved instances; and spending analysis. Use w | `/home/phyton/.gemini/antigravity/skills/cost-optimization` |
| **cpp-pro** | Write idiomatic C++ code with modern features; RAII; smart pointers; and STL algorithms. Handles templates; move semanti | `/home/phyton/.gemini/antigravity/skills/cpp-pro` |
| **c-pro** | "Write efficient C code with proper memory management; pointer" | `/home/phyton/.gemini/antigravity/skills/c-pro` |
| **cqrs-implementation** | "Implement Command Query Responsibility Segregation for scalable architectures. Use when separating read and write model | `/home/phyton/.gemini/antigravity/skills/cqrs-implementation` |
| **create-pr** | "Create pull requests following Sentry conventions. Use when opening PRs; writing PR descriptions; or preparing changes  | `/home/phyton/.gemini/antigravity/skills/create-pr` |
| **crewai** | "Expert in CrewAI - the leading role-based multi-agent framework used by 60% of Fortune 500 companies. Covers agent desi | `/home/phyton/.gemini/antigravity/skills/crewai` |
| **crypto-bd-agent** | Autonomous crypto business development patterns — multi-chain token discovery; 100-point scoring with wallet forensics | `/home/phyton/.gemini/antigravity/skills/crypto-bd-agent` |
| **csharp-pro** | Write modern C# code with advanced features like records; pattern matching; and async/await. Optimizes .NET applications | `/home/phyton/.gemini/antigravity/skills/csharp-pro` |
| **culture-index** | "Index and search culture documentation" | `/home/phyton/.gemini/antigravity/skills/culture-index` |
| **customer-support** | Elite AI-powered customer support specialist mastering conversational AI; automated ticketing; sentiment analysis; and o | `/home/phyton/.gemini/antigravity/skills/customer-support` |
| **customs-trade-compliance** | Codified expertise for customs documentation; tariff classification; duty optimisation; restricted party screening; and  | `/home/phyton/.gemini/antigravity/skills/customs-trade-compliance` |
| **daily-news-report** | "Scrapes content based on a preset URL list; filters high-quality technical information; and generates daily Markdown re | `/home/phyton/.gemini/antigravity/skills/daily-news-report` |
| **database-admin** | Expert database administrator specializing in modern cloud databases; automation; and reliability engineering. | `/home/phyton/.gemini/antigravity/skills/database-admin` |
| **database-architect** | Expert database architect specializing in data layer design from scratch; technology selection; schema modeling; and sca | `/home/phyton/.gemini/antigravity/skills/database-architect` |
| **database-cloud-optimization-cost-optimize** | "You are a cloud cost optimization expert specializing in reducing infrastructure expenses while maintaining performance | `/home/phyton/.gemini/antigravity/skills/database-cloud-optimization-cost-optimize` |
| **database-design** | "Database design principles and decision-making. Schema design; indexing strategy; ORM selection; serverless databases." | `/home/phyton/.gemini/antigravity/skills/database-design` |
| **database-migration** | "Execute database migrations across ORMs and platforms with zero-downtime strategies; data transformation; and rollback  | `/home/phyton/.gemini/antigravity/skills/database-migration` |
| **database-migrations-migration-observability** | "Migration monitoring; CDC; and observability infrastructure" | `/home/phyton/.gemini/antigravity/skills/database-migrations-migration-observability` |
| **database-migrations-sql-migrations** | "SQL database migrations with zero-downtime strategies for PostgreSQL; MySQL; and SQL Server. Focus on data integrity an | `/home/phyton/.gemini/antigravity/skills/database-migrations-sql-migrations` |
| **database-optimizer** | Expert database optimizer specializing in modern performance tuning; query optimization; and scalable architectures. | `/home/phyton/.gemini/antigravity/skills/database-optimizer` |
| **database** | "Database development and operations workflow covering SQL; NoSQL; database design; migrations; optimization; and data e | `/home/phyton/.gemini/antigravity/skills/database` |
| **datadog-automation** | "Automate Datadog tasks via Rube MCP (Composio): query metrics; search logs; manage monitors/dashboards; create events a | `/home/phyton/.gemini/antigravity/skills/datadog-automation` |
| **data-engineering-data-driven-feature** | "Build features guided by data insights; A/B testing; and continuous measurement using specialized agents for analysis;  | `/home/phyton/.gemini/antigravity/skills/data-engineering-data-driven-feature` |
| **data-engineering-data-pipeline** | "You are a data pipeline architecture expert specializing in scalable; reliable; and cost-effective data pipelines for b | `/home/phyton/.gemini/antigravity/skills/data-engineering-data-pipeline` |
| **data-engineer** | Build scalable data pipelines; modern data warehouses; and real-time streaming architectures. Implements Apache Spark; d | `/home/phyton/.gemini/antigravity/skills/data-engineer` |
| **data-quality-frameworks** | "Implement data quality validation with Great Expectations; dbt tests; and data contracts. Use when building data qualit | `/home/phyton/.gemini/antigravity/skills/data-quality-frameworks` |
| **data-scientist** | Expert data scientist for advanced analytics; machine learning; and statistical modeling. Handles complex data analysis; | `/home/phyton/.gemini/antigravity/skills/data-scientist` |
| **data-storytelling** | "Transform data into compelling narratives using visualization; context; and persuasive structure. Use when presenting a | `/home/phyton/.gemini/antigravity/skills/data-storytelling` |
| **data-structure-protocol** | "Give agents persistent structural memory of a codebase — navigate dependencies; track public APIs; and understand why | `/home/phyton/.gemini/antigravity/skills/data-structure-protocol` |
| **dbos-golang** | "DBOS Go SDK for building reliable; fault-tolerant applications with durable workflows. Use this skill when writing Go c | `/home/phyton/.gemini/antigravity/skills/dbos-golang` |
| **dbos-python** | "DBOS Python SDK for building reliable; fault-tolerant applications with durable workflows. Use this skill when writing  | `/home/phyton/.gemini/antigravity/skills/dbos-python` |
| **dbos-typescript** | "DBOS TypeScript SDK for building reliable; fault-tolerant applications with durable workflows. Use this skill when writ | `/home/phyton/.gemini/antigravity/skills/dbos-typescript` |
| **dbt-transformation-patterns** | "Master dbt (data build tool) for analytics engineering with model organization; testing; documentation; and incremental | `/home/phyton/.gemini/antigravity/skills/dbt-transformation-patterns` |
| **ddd-context-mapping** | "Map relationships between bounded contexts and define integration contracts using DDD context mapping patterns." | `/home/phyton/.gemini/antigravity/skills/ddd-context-mapping` |
| **ddd-strategic-design** | "Design DDD strategic artifacts including subdomains; bounded contexts; and ubiquitous language for complex business dom | `/home/phyton/.gemini/antigravity/skills/ddd-strategic-design` |
| **ddd-tactical-patterns** | "Apply DDD tactical patterns in code using entities; value objects; aggregates; repositories; and domain events with exp | `/home/phyton/.gemini/antigravity/skills/ddd-tactical-patterns` |
| **debugger** | 'Debugging specialist for errors; test failures; and unexpected | `/home/phyton/.gemini/antigravity/skills/debugger` |
| **debugging-strategies** | "Master systematic debugging techniques; profiling tools; and root cause analysis to efficiently track down bugs across  | `/home/phyton/.gemini/antigravity/skills/debugging-strategies` |
| **debugging-toolkit-smart-debug** | "Use when working with debugging toolkit smart debug" | `/home/phyton/.gemini/antigravity/skills/debugging-toolkit-smart-debug` |
| **deep-research** | "Execute autonomous multi-step research using Google Gemini Deep Research Agent. Use for: market analysis; competitive l | `/home/phyton/.gemini/antigravity/skills/deep-research` |
| **defi-protocol-templates** | "Implement DeFi protocols with production-ready templates for staking; AMMs; governance; and lending systems. Use when b | `/home/phyton/.gemini/antigravity/skills/defi-protocol-templates` |
| **dependency-management-deps-audit** | "You are a dependency security expert specializing in vulnerability scanning; license compliance; and supply chain secur | `/home/phyton/.gemini/antigravity/skills/dependency-management-deps-audit` |
| **dependency-upgrade** | "Manage major dependency version upgrades with compatibility analysis; staged rollout; and comprehensive testing. Use wh | `/home/phyton/.gemini/antigravity/skills/dependency-upgrade` |
| **deployment-engineer** | Expert deployment engineer specializing in modern CI/CD pipelines; GitOps workflows; and advanced deployment automation. | `/home/phyton/.gemini/antigravity/skills/deployment-engineer` |
| **deployment-pipeline-design** | "Design multi-stage CI/CD pipelines with approval gates; security checks; and deployment orchestration. Use when archite | `/home/phyton/.gemini/antigravity/skills/deployment-pipeline-design` |
| **deployment-procedures** | "Production deployment principles and decision-making. Safe deployment workflows; rollback strategies; and verification. | `/home/phyton/.gemini/antigravity/skills/deployment-procedures` |
| **deployment-validation-config-validate** | "You are a configuration management expert specializing in validating; testing; and ensuring the correctness of applicat | `/home/phyton/.gemini/antigravity/skills/deployment-validation-config-validate` |
| **design-md** | "Analyze Stitch projects and synthesize a semantic design system into DESIGN.md files" | `/home/phyton/.gemini/antigravity/skills/design-md` |
| **design-orchestration** | Orchestrates design workflows by routing work through brainstorming; multi-agent review; and execution readiness in the  | `/home/phyton/.gemini/antigravity/skills/design-orchestration` |
| **development** | "Comprehensive web; mobile; and backend development workflow bundling frontend; backend; full-stack; and mobile developm | `/home/phyton/.gemini/antigravity/skills/development` |
| **devops-troubleshooter** | Expert DevOps troubleshooter specializing in rapid incident response; advanced debugging; and modern observability. | `/home/phyton/.gemini/antigravity/skills/devops-troubleshooter` |
| **dexter-core** | Reglas arquitectónicas estrictas para el monolito "Dexter" (Java Web; Servlets; JSP; JDBC). | `/home/phyton/.gemini/antigravity/skills/dexter-core` |
| **discord-automation** | "Automate Discord tasks via Rube MCP (Composio): messages; channels; roles; webhooks; reactions. Always search tools fir | `/home/phyton/.gemini/antigravity/skills/discord-automation` |
| **discord-bot-architect** | "Specialized skill for building production-ready Discord bots. Covers Discord.js (JavaScript) and Pycord (Python); gatew | `/home/phyton/.gemini/antigravity/skills/discord-bot-architect` |
| **dispatching-parallel-agents** | "Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies" | `/home/phyton/.gemini/antigravity/skills/dispatching-parallel-agents` |
| **distributed-debugging-debug-trace** | "You are a debugging expert specializing in setting up comprehensive debugging environments; distributed tracing; and di | `/home/phyton/.gemini/antigravity/skills/distributed-debugging-debug-trace` |
| **distributed-tracing** | "Implement distributed tracing with Jaeger and Tempo to track requests across microservices and identify performance bot | `/home/phyton/.gemini/antigravity/skills/distributed-tracing` |
| **django-pro** | Master Django 5.x with async views; DRF; Celery; and Django Channels. Build scalable web applications with proper archit | `/home/phyton/.gemini/antigravity/skills/django-pro` |
| **doc-coauthoring** | "Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation; p | `/home/phyton/.gemini/antigravity/skills/doc-coauthoring` |
| **docker-expert** | "Docker containerization expert with deep knowledge of multi-stage builds; image optimization; container security; Docke | `/home/phyton/.gemini/antigravity/skills/docker-expert` |
| **docs-architect** | Creates comprehensive technical documentation from existing codebases. Analyzes architecture; design patterns; and imple | `/home/phyton/.gemini/antigravity/skills/docs-architect` |
| **documentation-generation-doc-generate** | "You are a documentation expert specializing in creating comprehensive; maintainable documentation from code. Generate A | `/home/phyton/.gemini/antigravity/skills/documentation-generation-doc-generate` |
| **documentation** | "Documentation generation workflow covering API docs; architecture docs; README files; code comments; and technical writ | `/home/phyton/.gemini/antigravity/skills/documentation` |
| **documentation-templates** | "Documentation templates and structure guidelines. README; API docs; code comments; and AI-friendly documentation." | `/home/phyton/.gemini/antigravity/skills/documentation-templates` |
| **docusign-automation** | "Automate DocuSign tasks via Rube MCP (Composio): templates; envelopes; signatures; document management. Always search t | `/home/phyton/.gemini/antigravity/skills/docusign-automation` |
| **docx-official** | "Comprehensive document creation; editing; and analysis with support for tracked changes; comments; formatting preservat | `/home/phyton/.gemini/antigravity/skills/docx-official` |
| **docx-official** | "Comprehensive document creation; editing; and analysis with support for tracked changes; comments; formatting preservat | `/home/phyton/.gemini/antigravity/skills/docx` |
| **domain-driven-design** | "Plan and route Domain-Driven Design work from strategic modeling to tactical implementation and evented architecture pa | `/home/phyton/.gemini/antigravity/skills/domain-driven-design` |
| **dotnet-architect** | Expert .NET backend architect specializing in C#; ASP.NET Core; Entity Framework; Dapper; and enterprise application pat | `/home/phyton/.gemini/antigravity/skills/dotnet-architect` |
| **dotnet-backend-patterns** | "Master C#/.NET backend development patterns for building robust APIs; MCP servers; and enterprise applications. Covers  | `/home/phyton/.gemini/antigravity/skills/dotnet-backend-patterns` |
| **dotnet-backend** | "Build ASP.NET Core 8+ backend services with EF Core; auth; background jobs; and production API patterns." | `/home/phyton/.gemini/antigravity/skills/dotnet-backend` |
| **dropbox-automation** | "Automate Dropbox file management; sharing; search; uploads; downloads; and folder operations via Rube MCP (Composio). A | `/home/phyton/.gemini/antigravity/skills/dropbox-automation` |
| **dx-optimizer** | Developer Experience specialist. Improves tooling; setup; and workflows. Use PROACTIVELY when setting up new projects; a | `/home/phyton/.gemini/antigravity/skills/dx-optimizer` |
| **e2e-testing-patterns** | "Master end-to-end testing with Playwright and Cypress to build reliable test suites that catch bugs; improve confidence | `/home/phyton/.gemini/antigravity/skills/e2e-testing-patterns` |
| **e2e-testing** | "End-to-end testing workflow with Playwright for browser automation; visual regression; cross-browser testing; and CI/CD | `/home/phyton/.gemini/antigravity/skills/e2e-testing` |
| **elixir-pro** | Write idiomatic Elixir code with OTP patterns; supervision trees; and Phoenix LiveView. Masters concurrency; fault toler | `/home/phyton/.gemini/antigravity/skills/elixir-pro` |
| **email-sequence** | "When the user wants to create or optimize an email sequence; drip campaign; automated email flow; or lifecycle email pr | `/home/phyton/.gemini/antigravity/skills/email-sequence` |
| **email-systems** | Email has the highest ROI of any marketing channel. $36 for every $1 spent. Yet most startups treat it as an afterthough | `/home/phyton/.gemini/antigravity/skills/email-systems` |
| **embedding-strategies** | "Select and optimize embedding models for semantic search and RAG applications. Use when choosing embedding models; impl | `/home/phyton/.gemini/antigravity/skills/embedding-strategies` |
| **employment-contract-templates** | "Create employment contracts; offer letters; and HR policy documents following legal best practices. Use when drafting e | `/home/phyton/.gemini/antigravity/skills/employment-contract-templates` |
| **energy-procurement** | Codified expertise for electricity and gas procurement; tariff optimisation; demand charge management; renewable PPA eva | `/home/phyton/.gemini/antigravity/skills/energy-procurement` |
| **error-debugging-error-analysis** | "You are an expert error analysis specialist with deep expertise in debugging distributed systems; analyzing production  | `/home/phyton/.gemini/antigravity/skills/error-debugging-error-analysis` |
| **error-debugging-error-trace** | "You are an error tracking and observability expert specializing in implementing comprehensive error monitoring solution | `/home/phyton/.gemini/antigravity/skills/error-debugging-error-trace` |
| **error-debugging-multi-agent-review** | "Use when working with error debugging multi agent review" | `/home/phyton/.gemini/antigravity/skills/error-debugging-multi-agent-review` |
| **error-detective** | Search logs and codebases for error patterns; stack traces; and anomalies. Correlates errors across systems and identifi | `/home/phyton/.gemini/antigravity/skills/error-detective` |
| **error-diagnostics-error-analysis** | "You are an expert error analysis specialist with deep expertise in debugging distributed systems; analyzing production  | `/home/phyton/.gemini/antigravity/skills/error-diagnostics-error-analysis` |
| **error-diagnostics-error-trace** | "You are an error tracking and observability expert specializing in implementing comprehensive error monitoring solution | `/home/phyton/.gemini/antigravity/skills/error-diagnostics-error-trace` |
| **error-diagnostics-smart-debug** | "Use when working with error diagnostics smart debug" | `/home/phyton/.gemini/antigravity/skills/error-diagnostics-smart-debug` |
| **error-handling-patterns** | "Master error handling patterns across languages including exceptions; Result types; error propagation; and graceful deg | `/home/phyton/.gemini/antigravity/skills/error-handling-patterns` |
| **ethical-hacking-methodology** | "This skill should be used when the user asks to \"learn ethical hacking\"; \"understand penetration testing lifecycle\" | `/home/phyton/.gemini/antigravity/skills/ethical-hacking-methodology` |
| **evaluation** | "Build evaluation frameworks for agent systems" | `/home/phyton/.gemini/antigravity/skills/evaluation` |
| **event-sourcing-architect** | "Expert in event sourcing; CQRS; and event-driven architecture patterns. Masters event store design; projection building | `/home/phyton/.gemini/antigravity/skills/event-sourcing-architect` |
| **event-store-design** | "Design and implement event stores for event-sourced systems. Use when building event sourcing infrastructure; choosing  | `/home/phyton/.gemini/antigravity/skills/event-store-design` |
| **exa-search** | "Semantic search; similar content discovery; and structured research using Exa API" | `/home/phyton/.gemini/antigravity/skills/exa-search` |
| **executing-plans** | "Use when you have a written implementation plan to execute in a separate session with review checkpoints" | `/home/phyton/.gemini/antigravity/skills/executing-plans` |
| **expo-deployment** | "Deploy Expo apps to production" | `/home/phyton/.gemini/antigravity/skills/expo-deployment` |
| **fal-audio** | "Text-to-speech and speech-to-text using fal.ai audio models" | `/home/phyton/.gemini/antigravity/skills/fal-audio` |
| **fal-generate** | "Generate images and videos using fal.ai AI models" | `/home/phyton/.gemini/antigravity/skills/fal-generate` |
| **fal-image-edit** | "AI-powered image editing with style transfer and object removal" | `/home/phyton/.gemini/antigravity/skills/fal-image-edit` |
| **fal-platform** | "Platform APIs for model management; pricing; and usage tracking" | `/home/phyton/.gemini/antigravity/skills/fal-platform` |
| **fal-upscale** | "Upscale and enhance image and video resolution using AI" | `/home/phyton/.gemini/antigravity/skills/fal-upscale` |
| **fal-workflow** | "Generate workflow JSON files for chaining AI models" | `/home/phyton/.gemini/antigravity/skills/fal-workflow` |
| **fastapi-pro** | Build high-performance async APIs with FastAPI; SQLAlchemy 2.0; and Pydantic V2. Master microservices; WebSockets; and m | `/home/phyton/.gemini/antigravity/skills/fastapi-pro` |
| **fastapi-router-py** | "Create FastAPI routers with CRUD operations; authentication dependencies; and proper response models. Use when building | `/home/phyton/.gemini/antigravity/skills/fastapi-router-py` |
| **fastapi-templates** | "Create production-ready FastAPI projects with async patterns; dependency injection; and comprehensive error handling. U | `/home/phyton/.gemini/antigravity/skills/fastapi-templates` |
| **ffuf-claude-skill** | "Web fuzzing with ffuf" | `/home/phyton/.gemini/antigravity/skills/ffuf-claude-skill` |
| **figma-automation** | "Automate Figma tasks via Rube MCP (Composio): files; components; design tokens; comments; exports. Always search tools  | `/home/phyton/.gemini/antigravity/skills/figma-automation` |
| **file-organizer** | "Intelligently organizes files and folders by understanding context; finding duplicates; and suggesting better organizat | `/home/phyton/.gemini/antigravity/skills/file-organizer` |
| **file-path-traversal** | "This skill should be used when the user asks to \"test for directory traversal\"; \"exploit path traversal vulnerabilit | `/home/phyton/.gemini/antigravity/skills/file-path-traversal` |
| **file-uploads** | "Expert at handling file uploads and cloud storage. Covers S3; Cloudflare R2; presigned URLs; multipart uploads; and ima | `/home/phyton/.gemini/antigravity/skills/file-uploads` |
| **find-bugs** | "Find bugs; security vulnerabilities; and code quality issues in local branch changes. Use when asked to review changes; | `/home/phyton/.gemini/antigravity/skills/find-bugs` |
| **finishing-a-development-branch** | "Use when implementation is complete; all tests pass; and you need to decide how to integrate the work - guides completi | `/home/phyton/.gemini/antigravity/skills/finishing-a-development-branch` |
| **firebase** | "Firebase gives you a complete backend in minutes - auth; database; storage; functions; hosting. But the ease of setup h | `/home/phyton/.gemini/antigravity/skills/firebase` |
| **firecrawl-scraper** | "Deep web scraping; screenshots; PDF parsing; and website crawling using Firecrawl API" | `/home/phyton/.gemini/antigravity/skills/firecrawl-scraper` |
| **firmware-analyst** | Expert firmware analyst specializing in embedded systems; IoT security; and hardware reverse engineering. | `/home/phyton/.gemini/antigravity/skills/firmware-analyst` |
| **fix-review** | "Verify fix commits address audit findings without new bugs" | `/home/phyton/.gemini/antigravity/skills/fix-review` |
| **flutter-expert** | Master Flutter development with Dart 3; advanced widgets; and multi-platform deployment. | `/home/phyton/.gemini/antigravity/skills/flutter-expert` |
| **form-cro** | Optimize any form that is NOT signup or account registration — including lead capture; contact; demo request; applicat | `/home/phyton/.gemini/antigravity/skills/form-cro` |
| **fp-ts-errors** | "Handle errors as values using fp-ts Either and TaskEither for cleaner; more predictable TypeScript code. Use when imple | `/home/phyton/.gemini/antigravity/skills/fp-ts-errors` |
| **fp-ts-pragmatic** | "A practical; jargon-free guide to fp-ts functional programming - the 80/20 approach that gets results without the acade | `/home/phyton/.gemini/antigravity/skills/fp-ts-pragmatic` |
| **fp-ts-react** | "Practical patterns for using fp-ts with React - hooks; state; forms; data fetching. Use when building React apps with f | `/home/phyton/.gemini/antigravity/skills/fp-ts-react` |
| **framework-migration-code-migrate** | "You are a code migration expert specializing in transitioning codebases between frameworks; languages; versions; and pl | `/home/phyton/.gemini/antigravity/skills/framework-migration-code-migrate` |
| **framework-migration-deps-upgrade** | "You are a dependency management expert specializing in safe; incremental upgrades of project dependencies. Plan and exe | `/home/phyton/.gemini/antigravity/skills/framework-migration-deps-upgrade` |
| **framework-migration-legacy-modernize** | "Orchestrate a comprehensive legacy system modernization using the strangler fig pattern; enabling gradual replacement o | `/home/phyton/.gemini/antigravity/skills/framework-migration-legacy-modernize` |
| **free-tool-strategy** | "When the user wants to plan; evaluate; or build a free tool for marketing purposes \u2014 lead generation; SEO value; o | `/home/phyton/.gemini/antigravity/skills/free-tool-strategy` |
| **freshdesk-automation** | "Automate Freshdesk helpdesk operations including tickets; contacts; companies; notes; and replies via Rube MCP (Composi | `/home/phyton/.gemini/antigravity/skills/freshdesk-automation` |
| **freshservice-automation** | "Automate Freshservice ITSM tasks via Rube MCP (Composio): create/update tickets; bulk operations; service requests; and | `/home/phyton/.gemini/antigravity/skills/freshservice-automation` |
| **frontend-design** | "Create distinctive; production-grade frontend interfaces with intentional aesthetics; high craft; and non-generic visua | `/home/phyton/.gemini/antigravity/skills/frontend-design` |
| **frontend-developer** | Build React components; implement responsive layouts; and handle client-side state management. Masters React 19; Next.js | `/home/phyton/.gemini/antigravity/skills/frontend-developer` |
| **frontend-dev-guidelines** | "Opinionated frontend development standards for modern React + TypeScript applications. Covers Suspense-first data fetch | `/home/phyton/.gemini/antigravity/skills/frontend-dev-guidelines` |
| **frontend-mobile-development-component-scaffold** | "You are a React component architecture expert specializing in scaffolding production-ready; accessible; and performant  | `/home/phyton/.gemini/antigravity/skills/frontend-mobile-development-component-scaffold` |
| **frontend-mobile-security-xss-scan** | "You are a frontend security specialist focusing on Cross-Site Scripting (XSS) vulnerability detection and prevention. A | `/home/phyton/.gemini/antigravity/skills/frontend-mobile-security-xss-scan` |
| **frontend-security-coder** | Expert in secure frontend coding practices specializing in XSS prevention; output sanitization; and client-side security | `/home/phyton/.gemini/antigravity/skills/frontend-security-coder` |
| **frontend-slides** | "Create stunning; animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wa | `/home/phyton/.gemini/antigravity/skills/frontend-slides` |
| **frontend-ui-dark-ts** | "Build dark-themed React applications using Tailwind CSS with custom theming; glassmorphism effects; and Framer Motion a | `/home/phyton/.gemini/antigravity/skills/frontend-ui-dark-ts` |
| **full-stack-orchestration-full-stack-feature** | "Use when working with full stack orchestration full stack feature" | `/home/phyton/.gemini/antigravity/skills/full-stack-orchestration-full-stack-feature` |
| **2d-games** | "2D game development principles. Sprites; tilemaps; physics; camera." | `/home/phyton/.gemini/antigravity/skills/game-development/2d-games` |
| **3d-games** | "3D game development principles. Rendering; shaders; physics; cameras." | `/home/phyton/.gemini/antigravity/skills/game-development/3d-games` |
| **game-art** | "Game art principles. Visual style selection; asset pipeline; animation workflow." | `/home/phyton/.gemini/antigravity/skills/game-development/game-art` |
| **game-audio** | "Game audio principles. Sound design; music integration; adaptive audio systems." | `/home/phyton/.gemini/antigravity/skills/game-development/game-audio` |
| **game-design** | "Game design principles. GDD structure; balancing; player psychology; progression." | `/home/phyton/.gemini/antigravity/skills/game-development/game-design` |
| **mobile-games** | "Mobile game development principles. Touch input; battery; performance; app stores." | `/home/phyton/.gemini/antigravity/skills/game-development/mobile-games` |
| **multiplayer** | "Multiplayer game development principles. Architecture; networking; synchronization." | `/home/phyton/.gemini/antigravity/skills/game-development/multiplayer` |
| **pc-games** | "PC and console game development principles. Engine selection; platform features; optimization strategies." | `/home/phyton/.gemini/antigravity/skills/game-development/pc-games` |
| **game-development** | "Game development orchestrator. Routes to platform-specific skills based on project needs." | `/home/phyton/.gemini/antigravity/skills/game-development` |
| **vr-ar** | "VR/AR development principles. Comfort; interaction; performance requirements." | `/home/phyton/.gemini/antigravity/skills/game-development/vr-ar` |
| **web-games** | "Web browser game development principles. Framework selection; WebGPU; optimization; PWA." | `/home/phyton/.gemini/antigravity/skills/game-development/web-games` |
| **gcp-cloud-run** | "Specialized skill for building production-ready serverless applications on GCP. Covers Cloud Run services (containerize | `/home/phyton/.gemini/antigravity/skills/gcp-cloud-run` |
| **gdpr-data-handling** | "Implement GDPR-compliant data handling with consent management; data subject rights; and privacy by design. Use when bu | `/home/phyton/.gemini/antigravity/skills/gdpr-data-handling` |
| **gemini-api-dev** | "Use this skill when building applications with Gemini models; Gemini API; working with multimodal content (text; images | `/home/phyton/.gemini/antigravity/skills/gemini-api-dev` |
| **geo-fundamentals** | "Generative Engine Optimization for AI search engines (ChatGPT; Claude; Perplexity)." | `/home/phyton/.gemini/antigravity/skills/geo-fundamentals` |
| **git-advanced-workflows** | "Master advanced Git workflows including rebasing; cherry-picking; bisect; worktrees; and reflog to maintain clean histo | `/home/phyton/.gemini/antigravity/skills/git-advanced-workflows` |
| **github-actions-templates** | "Create production-ready GitHub Actions workflows for automated testing; building; and deploying applications. Use when  | `/home/phyton/.gemini/antigravity/skills/github-actions-templates` |
| **github-automation** | "Automate GitHub repositories; issues; pull requests; branches; CI/CD; and permissions via Rube MCP (Composio). Manage c | `/home/phyton/.gemini/antigravity/skills/github-automation` |
| **github-issue-creator** | "Convert raw notes; error logs; voice dictation; or screenshots into crisp GitHub-flavored markdown issue reports. Use w | `/home/phyton/.gemini/antigravity/skills/github-issue-creator` |
| **github-workflow-automation** | "Automate GitHub workflows with AI assistance. Includes PR reviews; issue triage; CI/CD integration; and Git operations. | `/home/phyton/.gemini/antigravity/skills/github-workflow-automation` |
| **gitlab-automation** | "Automate GitLab project management; issues; merge requests; pipelines; branches; and user operations via Rube MCP (Comp | `/home/phyton/.gemini/antigravity/skills/gitlab-automation` |
| **gitlab-ci-patterns** | "Build GitLab CI/CD pipelines with multi-stage workflows; caching; and distributed runners for scalable automation. Use  | `/home/phyton/.gemini/antigravity/skills/gitlab-ci-patterns` |
| **gitops-workflow** | "Implement GitOps workflows with ArgoCD and Flux for automated; declarative Kubernetes deployments with continuous recon | `/home/phyton/.gemini/antigravity/skills/gitops-workflow` |
| **git-pr-workflows-git-workflow** | "Orchestrate a comprehensive git workflow from code review through PR creation; leveraging specialized agents for qualit | `/home/phyton/.gemini/antigravity/skills/git-pr-workflows-git-workflow` |
| **git-pr-workflows-onboard** | "You are an **expert onboarding specialist and knowledge transfer architect** with deep experience in remote-first organ | `/home/phyton/.gemini/antigravity/skills/git-pr-workflows-onboard` |
| **git-pr-workflows-pr-enhance** | "You are a PR optimization expert specializing in creating high-quality pull requests that facilitate efficient code rev | `/home/phyton/.gemini/antigravity/skills/git-pr-workflows-pr-enhance` |
| **git-pushing** | "Stage; commit; and push git changes with conventional commit messages. Use when user wants to commit and push changes;  | `/home/phyton/.gemini/antigravity/skills/git-pushing` |
| **gmail-automation** | "Automate Gmail tasks via Rube MCP (Composio): send/reply; search; labels; drafts; attachments. Always search tools firs | `/home/phyton/.gemini/antigravity/skills/gmail-automation` |
| **go-concurrency-patterns** | "Master Go concurrency with goroutines; channels; sync primitives; and context. Use when building concurrent Go applicat | `/home/phyton/.gemini/antigravity/skills/go-concurrency-patterns` |
| **godot-4-migration** | "Specialized guide for migrating Godot 3.x projects to Godot 4 (GDScript 2.0); covering syntax changes; Tweens; and expo | `/home/phyton/.gemini/antigravity/skills/godot-4-migration` |
| **godot-gdscript-patterns** | "Master Godot 4 GDScript patterns including signals; scenes; state machines; and optimization. Use when building Godot g | `/home/phyton/.gemini/antigravity/skills/godot-gdscript-patterns` |
| **golang-pro** | Master Go 1.21+ with modern patterns; advanced concurrency; performance optimization; and production-ready microservices | `/home/phyton/.gemini/antigravity/skills/golang-pro` |
| **google-analytics-automation** | "Automate Google Analytics tasks via Rube MCP (Composio): run reports; list accounts/properties; funnels; pivots; key ev | `/home/phyton/.gemini/antigravity/skills/google-analytics-automation` |
| **google-calendar-automation** | "Automate Google Calendar events; scheduling; availability checks; and attendee management via Rube MCP (Composio). Crea | `/home/phyton/.gemini/antigravity/skills/google-calendar-automation` |
| **google-drive-automation** | "Automate Google Drive file operations (upload; download; search; share; organize) via Rube MCP (Composio). Upload/downl | `/home/phyton/.gemini/antigravity/skills/google-drive-automation` |
| **googlesheets-automation** | "Automate Google Sheets operations (read; write; format; filter; manage spreadsheets) via Rube MCP (Composio). Read/writ | `/home/phyton/.gemini/antigravity/skills/googlesheets-automation` |
| **go-playwright** | "Expert capability for robust; stealthy; and efficient browser automation using Playwright Go." | `/home/phyton/.gemini/antigravity/skills/go-playwright` |
| **go-rod-master** | "Comprehensive guide for browser automation and web scraping with go-rod (Chrome DevTools Protocol) including stealth an | `/home/phyton/.gemini/antigravity/skills/go-rod-master` |
| **grafana-dashboards** | "Create and manage production Grafana dashboards for real-time visualization of system and application metrics. Use when | `/home/phyton/.gemini/antigravity/skills/grafana-dashboards` |
| **graphql-architect** | Master modern GraphQL with federation; performance optimization; and enterprise security. Build scalable schemas; implem | `/home/phyton/.gemini/antigravity/skills/graphql-architect` |
| **graphql** | "GraphQL gives clients exactly the data they need - no more; no less. One endpoint; typed schema; introspection. But the | `/home/phyton/.gemini/antigravity/skills/graphql` |
| **grpc-golang** | "Build production-ready gRPC services in Go with mTLS; streaming; and observability. Use when designing Protobuf contrac | `/home/phyton/.gemini/antigravity/skills/grpc-golang` |
| **haskell-pro** | "Expert Haskell engineer specializing in advanced type systems; pure" | `/home/phyton/.gemini/antigravity/skills/haskell-pro` |
| **helm-chart-scaffolding** | "Design; organize; and manage Helm charts for templating and packaging Kubernetes applications with reusable configurati | `/home/phyton/.gemini/antigravity/skills/helm-chart-scaffolding` |
| **helpdesk-automation** | "Automate HelpDesk tasks via Rube MCP (Composio): list tickets; manage views; use canned responses; and configure custom | `/home/phyton/.gemini/antigravity/skills/helpdesk-automation` |
| **hierarchical-agent-memory** | "Scoped CLAUDE.md memory system that reduces context token spend. Creates directory-level context files; tracks savings  | `/home/phyton/.gemini/antigravity/skills/hierarchical-agent-memory` |
| **hig-components-content** | Apple Human Interface Guidelines for content display components. | `/home/phyton/.gemini/antigravity/skills/hig-components-content` |
| **hig-components-controls** | Apple HIG guidance for selection and input controls including pickers; toggles; sliders; steppers; segmented controls; c | `/home/phyton/.gemini/antigravity/skills/hig-components-controls` |
| **hig-components-dialogs** | Apple HIG guidance for presentation components including alerts; action sheets; popovers; sheets; and digit entry views. | `/home/phyton/.gemini/antigravity/skills/hig-components-dialogs` |
| **hig-components-layout** | Apple Human Interface Guidelines for layout and navigation components. | `/home/phyton/.gemini/antigravity/skills/hig-components-layout` |
| **hig-components-menus** | Apple HIG guidance for menu and button components including menus; context menus; dock menus; edit menus; the menu bar;  | `/home/phyton/.gemini/antigravity/skills/hig-components-menus` |
| **hig-components-search** | Apple HIG guidance for navigation-related components including search fields; page controls; and path controls. | `/home/phyton/.gemini/antigravity/skills/hig-components-search` |
| **hig-components-status** | Apple HIG guidance for status and progress UI components including progress indicators; status bars; and activity rings. | `/home/phyton/.gemini/antigravity/skills/hig-components-status` |
| **hig-components-system** | 'Apple HIG guidance for system experience components: widgets; live activities; notifications; complications; home scree | `/home/phyton/.gemini/antigravity/skills/hig-components-system` |
| **hig-foundations** | Apple Human Interface Guidelines design foundations. | `/home/phyton/.gemini/antigravity/skills/hig-foundations` |
| **hig-inputs** | 'Apple HIG guidance for input methods and interaction patterns: gestures; Apple Pencil; keyboards; game controllers; poi | `/home/phyton/.gemini/antigravity/skills/hig-inputs` |
| **hig-patterns** | Apple Human Interface Guidelines interaction and UX patterns. | `/home/phyton/.gemini/antigravity/skills/hig-patterns` |
| **hig-platforms** | Apple Human Interface Guidelines for platform-specific design. | `/home/phyton/.gemini/antigravity/skills/hig-platforms` |
| **hig-project-context** | Create or update a shared Apple design context document that other HIG skills use to tailor guidance. | `/home/phyton/.gemini/antigravity/skills/hig-project-context` |
| **hig-technologies** | 'Apple HIG guidance for Apple technology integrations: Siri; Apple Pay; HealthKit; HomeKit; ARKit; machine learning; gen | `/home/phyton/.gemini/antigravity/skills/hig-technologies` |
| **hosted-agents-v2-py** | "Build hosted agents using Azure AI Projects SDK with ImageBasedHostedAgentDefinition. Use when creating container-based | `/home/phyton/.gemini/antigravity/skills/hosted-agents-v2-py` |
| **hr-pro** | Professional; ethical HR partner for hiring; onboarding/offboarding; PTO and leave; performance; compliant policies; and | `/home/phyton/.gemini/antigravity/skills/hr-pro` |
| **html-injection-testing** | "This skill should be used when the user asks to \"test for HTML injection\"; \"inject HTML into web pages\"; \"perform  | `/home/phyton/.gemini/antigravity/skills/html-injection-testing` |
| **hubspot-automation** | "Automate HubSpot CRM operations (contacts; companies; deals; tickets; properties) via Rube MCP using Composio integrati | `/home/phyton/.gemini/antigravity/skills/hubspot-automation` |
| **hubspot-integration** | "Expert patterns for HubSpot CRM integration including OAuth authentication; CRM objects; associations; batch operations | `/home/phyton/.gemini/antigravity/skills/hubspot-integration` |
| **hugging-face-cli** | "Execute Hugging Face Hub operations using the `hf` CLI. Use when the user needs to download models/datasets/spaces; upl | `/home/phyton/.gemini/antigravity/skills/hugging-face-cli` |
| **hugging-face-jobs** | "This skill should be used when users want to run any workload on Hugging Face Jobs infrastructure. Covers UV scripts; D | `/home/phyton/.gemini/antigravity/skills/hugging-face-jobs` |
| **hybrid-cloud-architect** | Expert hybrid cloud architect specializing in complex multi-cloud solutions across AWS/Azure/GCP and private clouds (Ope | `/home/phyton/.gemini/antigravity/skills/hybrid-cloud-architect` |
| **hybrid-cloud-networking** | "Configure secure; high-performance connectivity between on-premises infrastructure and cloud platforms using VPN and de | `/home/phyton/.gemini/antigravity/skills/hybrid-cloud-networking` |
| **hybrid-search-implementation** | "Combine vector and keyword search for improved retrieval. Use when implementing RAG systems; building search engines; o | `/home/phyton/.gemini/antigravity/skills/hybrid-search-implementation` |
| **idor-testing** | "This skill should be used when the user asks to \"test for insecure direct object references;\" \"find IDOR vulnerabili | `/home/phyton/.gemini/antigravity/skills/idor-testing` |
| **imagen** | "AI image generation skill powered by Google Gemini; enabling seamless visual content creation for UI placeholders; docu | `/home/phyton/.gemini/antigravity/skills/imagen` |
| **incident-responder** | Expert SRE incident responder specializing in rapid problem resolution; modern observability; and comprehensive incident | `/home/phyton/.gemini/antigravity/skills/incident-responder` |
| **incident-response-incident-response** | "Use when working with incident response incident response" | `/home/phyton/.gemini/antigravity/skills/incident-response-incident-response` |
| **incident-response-smart-fix** | "[Extended thinking: This workflow implements a sophisticated debugging and resolution pipeline that leverages AI-assist | `/home/phyton/.gemini/antigravity/skills/incident-response-smart-fix` |
| **incident-runbook-templates** | "Create structured incident response runbooks with step-by-step procedures; escalation paths; and recovery actions. Use  | `/home/phyton/.gemini/antigravity/skills/incident-runbook-templates` |
| **infinite-gratitude** | "Multi-agent research skill for parallel research execution (10 agents; battle-tested with real case studies)." | `/home/phyton/.gemini/antigravity/skills/infinite-gratitude` |
| **inngest** | "Inngest expert for serverless-first background jobs; event-driven workflows; and durable execution without managing que | `/home/phyton/.gemini/antigravity/skills/inngest` |
| **instagram-automation** | "Automate Instagram tasks via Rube MCP (Composio): create posts; carousels; manage media; get insights; and publishing l | `/home/phyton/.gemini/antigravity/skills/instagram-automation` |
| **interactive-portfolio** | "Expert in building portfolios that actually land jobs and clients - not just showing work; but creating memorable exper | `/home/phyton/.gemini/antigravity/skills/interactive-portfolio` |
| **intercom-automation** | "Automate Intercom tasks via Rube MCP (Composio): conversations; contacts; companies; segments; admins. Always search to | `/home/phyton/.gemini/antigravity/skills/intercom-automation` |
| **internal-comms-anthropic** | "A set of resources to help me write all kinds of internal communications; using the formats that my company likes to us | `/home/phyton/.gemini/antigravity/skills/internal-comms-anthropic` |
| **internal-comms-community** | "A set of resources to help me write all kinds of internal communications; using the formats that my company likes to us | `/home/phyton/.gemini/antigravity/skills/internal-comms-community` |
| **ios-developer** | Develop native iOS applications with Swift/SwiftUI. Masters iOS 18; SwiftUI; UIKit integration; Core Data; networking; a | `/home/phyton/.gemini/antigravity/skills/ios-developer` |
| **istio-traffic-management** | "Configure Istio traffic management including routing; load balancing; circuit breakers; and canary deployments. Use whe | `/home/phyton/.gemini/antigravity/skills/istio-traffic-management` |
| **iterate-pr** | "Iterate on a PR until CI passes. Use when you need to fix CI failures; address review feedback; or continuously push fi | `/home/phyton/.gemini/antigravity/skills/iterate-pr` |
| **java-pro** | Master Java 21+ with modern features like virtual threads; pattern matching; and Spring Boot 3.x. Expert in the latest J | `/home/phyton/.gemini/antigravity/skills/java-pro` |
| **javascript-mastery** | "Comprehensive JavaScript reference covering 33+ essential concepts every developer should know. From fundamentals like  | `/home/phyton/.gemini/antigravity/skills/javascript-mastery` |
| **javascript-pro** | Master modern JavaScript with ES6+; async patterns; and Node.js APIs. Handles promises; event loops; and browser/Node co | `/home/phyton/.gemini/antigravity/skills/javascript-pro` |
| **javascript-testing-patterns** | "Implement comprehensive testing strategies using Jest; Vitest; and Testing Library for unit tests; integration tests; a | `/home/phyton/.gemini/antigravity/skills/javascript-testing-patterns` |
| **javascript-typescript-typescript-scaffold** | "You are a TypeScript project architecture expert specializing in scaffolding production-ready Node.js and frontend appl | `/home/phyton/.gemini/antigravity/skills/javascript-typescript-typescript-scaffold` |
| **jira-automation** | "Automate Jira tasks via Rube MCP (Composio): issues; projects; sprints; boards; comments; users. Always search tools fi | `/home/phyton/.gemini/antigravity/skills/jira-automation` |
| **julia-pro** | Master Julia 1.10+ with modern features; performance optimization; multiple dispatch; and production-ready practices. | `/home/phyton/.gemini/antigravity/skills/julia-pro` |
| **k8s-manifest-generator** | "Create production-ready Kubernetes manifests for Deployments; Services; ConfigMaps; and Secrets following best practice | `/home/phyton/.gemini/antigravity/skills/k8s-manifest-generator` |
| **k8s-security-policies** | "Implement Kubernetes security policies including NetworkPolicy; PodSecurityPolicy; and RBAC for production-grade securi | `/home/phyton/.gemini/antigravity/skills/k8s-security-policies` |
| **kaizen** | "Guide for continuous improvement; error proofing; and standardization. Use this skill when the user wants to improve co | `/home/phyton/.gemini/antigravity/skills/kaizen` |
| **klaviyo-automation** | "Automate Klaviyo tasks via Rube MCP (Composio): manage email/SMS campaigns; inspect campaign messages; track tags; and  | `/home/phyton/.gemini/antigravity/skills/klaviyo-automation` |
| **kotlin-coroutines-expert** | "Expert patterns for Kotlin Coroutines and Flow; covering structured concurrency; error handling; and testing." | `/home/phyton/.gemini/antigravity/skills/kotlin-coroutines-expert` |
| **kpi-dashboard-design** | "Design effective KPI dashboards with metrics selection; visualization best practices; and real-time monitoring patterns | `/home/phyton/.gemini/antigravity/skills/kpi-dashboard-design` |
| **kubernetes-architect** | Expert Kubernetes architect specializing in cloud-native infrastructure; advanced GitOps workflows (ArgoCD/Flux); and en | `/home/phyton/.gemini/antigravity/skills/kubernetes-architect` |
| **kubernetes-deployment** | "Kubernetes deployment workflow for container orchestration; Helm charts; service mesh; and production-ready K8s configu | `/home/phyton/.gemini/antigravity/skills/kubernetes-deployment` |
| **langchain-architecture** | "Design LLM applications using the LangChain framework with agents; memory; and tool integration patterns. Use when buil | `/home/phyton/.gemini/antigravity/skills/langchain-architecture` |
| **langfuse** | "Expert in Langfuse - the open-source LLM observability platform. Covers tracing; prompt management; evaluation; dataset | `/home/phyton/.gemini/antigravity/skills/langfuse` |
| **langgraph** | "Expert in LangGraph - the production-grade framework for building stateful; multi-actor AI applications. Covers graph c | `/home/phyton/.gemini/antigravity/skills/langgraph` |
| **laravel-expert** | "Senior Laravel Engineer role for production-grade; maintainable; and idiomatic Laravel solutions. Focuses on clean arch | `/home/phyton/.gemini/antigravity/skills/laravel-expert` |
| **laravel-security-audit** | "Security auditor for Laravel applications. Analyzes code for vulnerabilities; misconfigurations; and insecure practices | `/home/phyton/.gemini/antigravity/skills/laravel-security-audit` |
| **last30days** | "Research a topic from the last 30 days on Reddit + X + Web; become an expert; and write copy-paste-ready prompts for th | `/home/phyton/.gemini/antigravity/skills/last30days` |
| **launch-strategy** | "When the user wants to plan a product launch; feature announcement; or release strategy. Also use when the user mention | `/home/phyton/.gemini/antigravity/skills/launch-strategy` |
| **legacy-modernizer** | Refactor legacy codebases; migrate outdated frameworks; and implement gradual modernization. Handles technical debt; dep | `/home/phyton/.gemini/antigravity/skills/legacy-modernizer` |
| **legal-advisor** | Draft privacy policies; terms of service; disclaimers; and legal notices. Creates GDPR-compliant texts; cookie policies; | `/home/phyton/.gemini/antigravity/skills/legal-advisor` |
| **base** | "Database management; forms; reports; and data operations with LibreOffice Base." | `/home/phyton/.gemini/antigravity/skills/libreoffice/base` |
| **calc** | "Spreadsheet creation; format conversion (ODS/XLSX/CSV); formulas; data automation with LibreOffice Calc." | `/home/phyton/.gemini/antigravity/skills/libreoffice/calc` |
| **draw** | "Vector graphics and diagram creation; format conversion (ODG/SVG/PDF) with LibreOffice Draw." | `/home/phyton/.gemini/antigravity/skills/libreoffice/draw` |
| **impress** | "Presentation creation; format conversion (ODP/PPTX/PDF); slide automation with LibreOffice Impress." | `/home/phyton/.gemini/antigravity/skills/libreoffice/impress` |
| **writer** | "Document creation; format conversion (ODT/DOCX/PDF); mail merge; and automation with LibreOffice Writer." | `/home/phyton/.gemini/antigravity/skills/libreoffice/writer` |
| **linear-automation** | "Automate Linear tasks via Rube MCP (Composio): issues; projects; cycles; teams; labels. Always search tools first for c | `/home/phyton/.gemini/antigravity/skills/linear-automation` |
| **linear-claude-skill** | "Manage Linear issues; projects; and teams" | `/home/phyton/.gemini/antigravity/skills/linear-claude-skill` |
| **linkedin-automation** | "Automate LinkedIn tasks via Rube MCP (Composio): create posts; manage profile; company info; comments; and image upload | `/home/phyton/.gemini/antigravity/skills/linkedin-automation` |
| **linkedin-cli** | "Use when automating LinkedIn via CLI: fetch profiles; search people/companies; send messages; manage connections; creat | `/home/phyton/.gemini/antigravity/skills/linkedin-cli` |
| **linkerd-patterns** | "Implement Linkerd service mesh patterns for lightweight; security-focused service mesh deployments. Use when setting up | `/home/phyton/.gemini/antigravity/skills/linkerd-patterns` |
| **lint-and-validate** | "Automatic quality control; linting; and static analysis procedures. Use after every code modification to ensure syntax  | `/home/phyton/.gemini/antigravity/skills/lint-and-validate` |
| **linux-privilege-escalation** | "This skill should be used when the user asks to \"escalate privileges on Linux\"; \"find privesc vectors on Linux syste | `/home/phyton/.gemini/antigravity/skills/linux-privilege-escalation` |
| **linux-shell-scripting** | "This skill should be used when the user asks to \"create bash scripts\"; \"automate Linux tasks\"; \"monitor system res | `/home/phyton/.gemini/antigravity/skills/linux-shell-scripting` |
| **linux-troubleshooting** | "Linux system troubleshooting workflow for diagnosing and resolving system issues; performance problems; and service fai | `/home/phyton/.gemini/antigravity/skills/linux-troubleshooting` |
| **llm-application-dev-ai-assistant** | "You are an AI assistant development expert specializing in creating intelligent conversational interfaces; chatbots; an | `/home/phyton/.gemini/antigravity/skills/llm-application-dev-ai-assistant` |
| **llm-application-dev-langchain-agent** | "You are an expert LangChain agent developer specializing in production-grade AI systems using LangChain 0.1+ and LangGr | `/home/phyton/.gemini/antigravity/skills/llm-application-dev-langchain-agent` |
| **llm-application-dev-prompt-optimize** | "You are an expert prompt engineer specializing in crafting effective prompts for LLMs through advanced techniques inclu | `/home/phyton/.gemini/antigravity/skills/llm-application-dev-prompt-optimize` |
| **llm-app-patterns** | "Production-ready patterns for building LLM applications. Covers RAG pipelines; agent architectures; prompt IDEs; and LL | `/home/phyton/.gemini/antigravity/skills/llm-app-patterns` |
| **llm-evaluation** | "Implement comprehensive evaluation strategies for LLM applications using automated metrics; human feedback; and benchma | `/home/phyton/.gemini/antigravity/skills/llm-evaluation` |
| **logistics-exception-management** | Codified expertise for handling freight exceptions; shipment delays; damages; losses; and carrier disputes. Informed by  | `/home/phyton/.gemini/antigravity/skills/logistics-exception-management` |
| **loki-mode** | "Multi-agent autonomous startup system for Claude Code. Triggers on \"Loki Mode\". Orchestrates 100+ specialized agents  | `/home/phyton/.gemini/antigravity/skills/loki-mode` |
| **m365-agents-dotnet** | Microsoft 365 Agents SDK for .NET. Build multichannel agents for Teams/M365/Copilot Studio with ASP.NET Core hosting; Ag | `/home/phyton/.gemini/antigravity/skills/m365-agents-dotnet` |
| **m365-agents-py** | Microsoft 365 Agents SDK for Python. Build multichannel agents for Teams/M365/Copilot Studio with aiohttp hosting; Agent | `/home/phyton/.gemini/antigravity/skills/m365-agents-py` |
| **m365-agents-ts** | Microsoft 365 Agents SDK for TypeScript/Node.js. | `/home/phyton/.gemini/antigravity/skills/m365-agents-ts` |
| **machine-learning-ops-ml-pipeline** | "Design and implement a complete ML pipeline for: $ARGUMENTS" | `/home/phyton/.gemini/antigravity/skills/machine-learning-ops-ml-pipeline` |
| **mailchimp-automation** | "Automate Mailchimp email marketing including campaigns; audiences; subscribers; segments; and analytics via Rube MCP (C | `/home/phyton/.gemini/antigravity/skills/mailchimp-automation` |
| **make-automation** | "Automate Make (Integromat) tasks via Rube MCP (Composio): operations; enums; language and timezone lookups. Always sear | `/home/phyton/.gemini/antigravity/skills/make-automation` |
| **makepad-skills** | "Makepad UI development skills for Rust apps: setup; patterns; shaders; packaging; and troubleshooting." | `/home/phyton/.gemini/antigravity/skills/makepad-skills` |
| **malware-analyst** | Expert malware analyst specializing in defensive malware research; threat intelligence; and incident response. Masters s | `/home/phyton/.gemini/antigravity/skills/malware-analyst` |
| **manifest** | "Install and configure the Manifest observability plugin for your agents. Use when setting up telemetry; configuring API | `/home/phyton/.gemini/antigravity/skills/manifest` |
| **marketing-ideas** | "Provide proven marketing strategies and growth ideas for SaaS and software products; prioritized using a marketing feas | `/home/phyton/.gemini/antigravity/skills/marketing-ideas` |
| **marketing-psychology** | "Apply behavioral science and mental models to marketing decisions; prioritized using a psychological leverage and feasi | `/home/phyton/.gemini/antigravity/skills/marketing-psychology` |
| **market-sizing-analysis** | This skill should be used when the user asks to \\\"calculate TAM\\\"; "determine SAM"; "estimate SOM"; "size the market | `/home/phyton/.gemini/antigravity/skills/market-sizing-analysis` |
| **mcp-builder-ms** | "Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external service | `/home/phyton/.gemini/antigravity/skills/mcp-builder-ms` |
| **mcp-builder** | "Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external service | `/home/phyton/.gemini/antigravity/skills/mcp-builder` |
| **memory-forensics** | "Master memory forensics techniques including memory acquisition; process analysis; and artifact extraction using Volati | `/home/phyton/.gemini/antigravity/skills/memory-forensics` |
| **memory-safety-patterns** | "Implement memory-safe programming with RAII; ownership; smart pointers; and resource management across Rust; C++; and C | `/home/phyton/.gemini/antigravity/skills/memory-safety-patterns` |
| **memory-systems** | "Design short-term; long-term; and graph-based memory architectures" | `/home/phyton/.gemini/antigravity/skills/memory-systems` |
| **mermaid-expert** | Create Mermaid diagrams for flowcharts; sequences; ERDs; and architectures. Masters syntax for all diagram types and sty | `/home/phyton/.gemini/antigravity/skills/mermaid-expert` |
| **metasploit-framework** | "This skill should be used when the user asks to \"use Metasploit for penetration testing\"; \"exploit vulnerabilities w | `/home/phyton/.gemini/antigravity/skills/metasploit-framework` |
| **micro-saas-launcher** | "Expert in launching small; focused SaaS products fast - the indie hacker approach to building profitable software. Cove | `/home/phyton/.gemini/antigravity/skills/micro-saas-launcher` |
| **microservices-patterns** | "Design microservices architectures with service boundaries; event-driven communication; and resilience patterns. Use wh | `/home/phyton/.gemini/antigravity/skills/microservices-patterns` |
| **microsoft-azure-webjobs-extensions-authentication-events-dotnet** | Microsoft Entra Authentication Events SDK for .NET. Azure Functions triggers for custom authentication extensions. | `/home/phyton/.gemini/antigravity/skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet` |
| **microsoft-teams-automation** | "Automate Microsoft Teams tasks via Rube MCP (Composio): send messages; manage channels; create meetings; handle chats;  | `/home/phyton/.gemini/antigravity/skills/microsoft-teams-automation` |
| **minecraft-bukkit-pro** | Master Minecraft server plugin development with Bukkit; Spigot; and Paper APIs. | `/home/phyton/.gemini/antigravity/skills/minecraft-bukkit-pro` |
| **miro-automation** | "Automate Miro tasks via Rube MCP (Composio): boards; items; sticky notes; frames; sharing; connectors. Always search to | `/home/phyton/.gemini/antigravity/skills/miro-automation` |
| **mixpanel-automation** | "Automate Mixpanel tasks via Rube MCP (Composio): events; segmentation; funnels; cohorts; user profiles; JQL queries. Al | `/home/phyton/.gemini/antigravity/skills/mixpanel-automation` |
| **ml-engineer** | Build production ML systems with PyTorch 2.x; TensorFlow; and modern ML frameworks. Implements model serving; feature en | `/home/phyton/.gemini/antigravity/skills/ml-engineer` |
| **mlops-engineer** | Build comprehensive ML pipelines; experiment tracking; and model registries with MLflow; Kubeflow; and modern MLOps tool | `/home/phyton/.gemini/antigravity/skills/mlops-engineer` |
| **ml-pipeline-workflow** | "Build end-to-end MLOps pipelines from data preparation through model training; validation; and production deployment. U | `/home/phyton/.gemini/antigravity/skills/ml-pipeline-workflow` |
| **mobile-design** | "Mobile-first design and engineering doctrine for iOS and Android apps. Covers touch interaction; performance; platform  | `/home/phyton/.gemini/antigravity/skills/mobile-design` |
| **mobile-developer** | Develop React Native; Flutter; or native mobile apps with modern architecture patterns. Masters cross-platform developme | `/home/phyton/.gemini/antigravity/skills/mobile-developer` |
| **mobile-security-coder** | Expert in secure mobile coding practices specializing in input validation; WebView security; and mobile-specific securit | `/home/phyton/.gemini/antigravity/skills/mobile-security-coder` |
| **modern-javascript-patterns** | "Master ES6+ features including async/await; destructuring; spread operators; arrow functions; promises; modules; iterat | `/home/phyton/.gemini/antigravity/skills/modern-javascript-patterns` |
| **monday-automation** | "Automate Monday.com work management including boards; items; columns; groups; subitems; and updates via Rube MCP (Compo | `/home/phyton/.gemini/antigravity/skills/monday-automation` |
| **monorepo-architect** | "Expert in monorepo architecture; build systems; and dependency management at scale. Masters Nx; Turborepo; Bazel; and L | `/home/phyton/.gemini/antigravity/skills/monorepo-architect` |
| **monorepo-management** | "Master monorepo management with Turborepo; Nx; and pnpm workspaces to build efficient; scalable multi-package repositor | `/home/phyton/.gemini/antigravity/skills/monorepo-management` |
| **moodle-external-api-development** | "Create custom external web service APIs for Moodle LMS. Use when implementing web services for course management; user  | `/home/phyton/.gemini/antigravity/skills/moodle-external-api-development` |
| **mtls-configuration** | "Configure mutual TLS (mTLS) for zero-trust service-to-service communication. Use when implementing zero-trust networkin | `/home/phyton/.gemini/antigravity/skills/mtls-configuration` |
| **multi-agent-brainstorming** | "Simulate a structured peer-review process using multiple specialized agents to validate designs; surface hidden assumpt | `/home/phyton/.gemini/antigravity/skills/multi-agent-brainstorming` |
| **multi-agent-patterns** | "Master orchestrator; peer-to-peer; and hierarchical multi-agent architectures" | `/home/phyton/.gemini/antigravity/skills/multi-agent-patterns` |
| **multi-cloud-architecture** | "Design multi-cloud architectures using a decision framework to select and integrate services across AWS; Azure; and GCP | `/home/phyton/.gemini/antigravity/skills/multi-cloud-architecture` |
| **multi-platform-apps-multi-platform** | "Build and deploy the same feature consistently across web; mobile; and desktop platforms using API-first architecture a | `/home/phyton/.gemini/antigravity/skills/multi-platform-apps-multi-platform` |
| **n8n-code-python** | "Write Python code in n8n Code nodes. Use when writing Python in n8n; using _input/_json/_node syntax; working with stan | `/home/phyton/.gemini/antigravity/skills/n8n-code-python` |
| **n8n-mcp-tools-expert** | "Expert guide for using n8n-mcp MCP tools effectively. Use when searching for nodes; validating configurations; accessin | `/home/phyton/.gemini/antigravity/skills/n8n-mcp-tools-expert` |
| **n8n-node-configuration** | "Operation-aware node configuration guidance. Use when configuring nodes; understanding property dependencies; determini | `/home/phyton/.gemini/antigravity/skills/n8n-node-configuration` |
| **nanobanana-ppt-skills** | "AI-powered PPT generation with document analysis and styled images" | `/home/phyton/.gemini/antigravity/skills/nanobanana-ppt-skills` |
| **neon-postgres** | "Expert patterns for Neon serverless Postgres; branching; connection pooling; and Prisma/Drizzle integration Use when: n | `/home/phyton/.gemini/antigravity/skills/neon-postgres` |
| **nerdzao-elite-gemini-high** | "Modo Elite Coder + UX Pixel-Perfect otimizado especificamente para Gemini 3.1 Pro High. Workflow completo com foco em q | `/home/phyton/.gemini/antigravity/skills/nerdzao-elite-gemini-high` |
| **nerdzao-elite** | "Senior Elite Software Engineer (15+) and Senior Product Designer. Full workflow with planning; architecture; TDD; clean | `/home/phyton/.gemini/antigravity/skills/nerdzao-elite` |
| **nestjs-expert** | "Nest.js framework expert specializing in module architecture; dependency injection; middleware; guards; interceptors; t | `/home/phyton/.gemini/antigravity/skills/nestjs-expert` |
| **network-101** | "This skill should be used when the user asks to \"set up a web server\"; \"configure HTTP or HTTPS\"; \"perform SNMP en | `/home/phyton/.gemini/antigravity/skills/network-101` |
| **network-engineer** | Expert network engineer specializing in modern cloud networking; security architectures; and performance optimization. | `/home/phyton/.gemini/antigravity/skills/network-engineer` |
| **nextjs-app-router-patterns** | "Master Next.js 14+ App Router with Server Components; streaming; parallel routes; and advanced data fetching. Use when  | `/home/phyton/.gemini/antigravity/skills/nextjs-app-router-patterns` |
| **nextjs-best-practices** | "Next.js App Router principles. Server Components; data fetching; routing patterns." | `/home/phyton/.gemini/antigravity/skills/nextjs-best-practices` |
| **nextjs-supabase-auth** | "Expert integration of Supabase Auth with Next.js App Router Use when: supabase auth next; authentication next.js; login | `/home/phyton/.gemini/antigravity/skills/nextjs-supabase-auth` |
| **nft-standards** | "Implement NFT standards (ERC-721; ERC-1155) with proper metadata handling; minting strategies; and marketplace integrat | `/home/phyton/.gemini/antigravity/skills/nft-standards` |
| **nodejs-backend-patterns** | "Build production-ready Node.js backend services with Express/Fastify; implementing middleware patterns; error handling; | `/home/phyton/.gemini/antigravity/skills/nodejs-backend-patterns` |
| **nodejs-best-practices** | "Node.js development principles and decision-making. Framework selection; async patterns; security; and architecture. Te | `/home/phyton/.gemini/antigravity/skills/nodejs-best-practices` |
| **nosql-expert** | "Expert guidance for distributed NoSQL databases (Cassandra; DynamoDB). Focuses on mental models; query-first modeling;  | `/home/phyton/.gemini/antigravity/skills/nosql-expert` |
| **notebooklm** | "Use this skill to query your Google NotebookLM notebooks directly from Claude Code for source-grounded; citation-backed | `/home/phyton/.gemini/antigravity/skills/notebooklm` |
| **notion-automation** | "Automate Notion tasks via Rube MCP (Composio): pages; databases; blocks; comments; users. Always search tools first for | `/home/phyton/.gemini/antigravity/skills/notion-automation` |
| **notion-template-business** | "Expert in building and selling Notion templates as a business - not just making templates; but building a sustainable d | `/home/phyton/.gemini/antigravity/skills/notion-template-business` |
| **nx-workspace-patterns** | "Configure and optimize Nx monorepo workspaces. Use when setting up Nx; configuring project boundaries; optimizing build | `/home/phyton/.gemini/antigravity/skills/nx-workspace-patterns` |
| **observability-engineer** | Build production-ready monitoring; logging; and tracing systems. Implements comprehensive observability strategies; SLI/ | `/home/phyton/.gemini/antigravity/skills/observability-engineer` |
| **observability-monitoring-monitor-setup** | "You are a monitoring and observability expert specializing in implementing comprehensive monitoring solutions. Set up m | `/home/phyton/.gemini/antigravity/skills/observability-monitoring-monitor-setup` |
| **observability-monitoring-slo-implement** | "You are an SLO (Service Level Objective) expert specializing in implementing reliability standards and error budget-bas | `/home/phyton/.gemini/antigravity/skills/observability-monitoring-slo-implement` |
| **observe-whatsapp** | "Observe and troubleshoot WhatsApp in Kapso: debug message delivery; inspect webhook deliveries/retries; triage API erro | `/home/phyton/.gemini/antigravity/skills/observe-whatsapp` |
| **obsidian-clipper-template-creator** | "Guide for creating templates for the Obsidian Web Clipper. Use when you want to create a new clipping template; underst | `/home/phyton/.gemini/antigravity/skills/obsidian-clipper-template-creator` |
| **office-productivity** | "Office productivity workflow covering document creation; spreadsheet automation; presentation generation; and integrati | `/home/phyton/.gemini/antigravity/skills/office-productivity` |
| **onboarding-cro** | "When the user wants to optimize post-signup onboarding; user activation; first-run experience; or time-to-value. Also u | `/home/phyton/.gemini/antigravity/skills/onboarding-cro` |
| **on-call-handoff-patterns** | "Master on-call shift handoffs with context transfer; escalation procedures; and documentation. Use when transitioning o | `/home/phyton/.gemini/antigravity/skills/on-call-handoff-patterns` |
| **one-drive-automation** | "Automate OneDrive file management; search; uploads; downloads; sharing; permissions; and folder operations via Rube MCP | `/home/phyton/.gemini/antigravity/skills/one-drive-automation` |
| **openapi-spec-generation** | "Generate and maintain OpenAPI 3.1 specifications from code; design-first specs; and validation patterns. Use when creat | `/home/phyton/.gemini/antigravity/skills/openapi-spec-generation` |
| **os-scripting** | "Operating system and shell scripting troubleshooting workflow for Linux; macOS; and Windows. Covers bash scripting; sys | `/home/phyton/.gemini/antigravity/skills/os-scripting` |
| **oss-hunter** | "Automatically hunt for high-impact OSS contribution opportunities in trending repositories." | `/home/phyton/.gemini/antigravity/skills/oss-hunter` |
| **outlook-automation** | "Automate Outlook tasks via Rube MCP (Composio): emails; calendar; contacts; folders; attachments. Always search tools f | `/home/phyton/.gemini/antigravity/skills/outlook-automation` |
| **outlook-calendar-automation** | "Automate Outlook Calendar tasks via Rube MCP (Composio): create events; manage attendees; find meeting times; and handl | `/home/phyton/.gemini/antigravity/skills/outlook-calendar-automation` |
| **page-cro** | Analyze and optimize individual pages for conversion performance. | `/home/phyton/.gemini/antigravity/skills/page-cro` |
| **pagerduty-automation** | "Automate PagerDuty tasks via Rube MCP (Composio): manage incidents; services; schedules; escalation policies; and on-ca | `/home/phyton/.gemini/antigravity/skills/pagerduty-automation` |
| **paid-ads** | "When the user wants help with paid advertising campaigns on Google Ads; Meta (Facebook/Instagram); LinkedIn; Twitter/X; | `/home/phyton/.gemini/antigravity/skills/paid-ads` |
| **parallel-agents** | "Multi-agent orchestration patterns. Use when multiple independent tasks can run with different domain expertise or when | `/home/phyton/.gemini/antigravity/skills/parallel-agents` |
| **payment-integration** | Integrate Stripe; PayPal; and payment processors. Handles checkout flows; subscriptions; webhooks; and PCI compliance. U | `/home/phyton/.gemini/antigravity/skills/payment-integration` |
| **paypal-integration** | "Integrate PayPal payment processing with support for express checkout; subscriptions; and refund management. Use when i | `/home/phyton/.gemini/antigravity/skills/paypal-integration` |
| **paywall-upgrade-cro** | "When the user wants to create or optimize in-app paywalls; upgrade screens; upsell modals; or feature gates. Also use w | `/home/phyton/.gemini/antigravity/skills/paywall-upgrade-cro` |
| **pci-compliance** | "Implement PCI DSS compliance requirements for secure handling of payment card data and payment systems. Use when securi | `/home/phyton/.gemini/antigravity/skills/pci-compliance` |
| **pdf-official** | "Comprehensive PDF manipulation toolkit for extracting text and tables; creating new PDFs; merging/splitting documents;  | `/home/phyton/.gemini/antigravity/skills/pdf-official` |
| **pdf-official** | "Comprehensive PDF manipulation toolkit for extracting text and tables; creating new PDFs; merging/splitting documents;  | `/home/phyton/.gemini/antigravity/skills/pdf` |
| **pentest-checklist** | "This skill should be used when the user asks to \"plan a penetration test\"; \"create a security assessment checklist\" | `/home/phyton/.gemini/antigravity/skills/pentest-checklist` |
| **pentest-commands** | "This skill should be used when the user asks to \"run pentest commands\"; \"scan with nmap\"; \"use metasploit exploits | `/home/phyton/.gemini/antigravity/skills/pentest-commands` |
| **performance-engineer** | "Expert performance engineer specializing in modern observability;" | `/home/phyton/.gemini/antigravity/skills/performance-engineer` |
| **performance-profiling** | "Performance profiling principles. Measurement; analysis; and optimization techniques." | `/home/phyton/.gemini/antigravity/skills/performance-profiling` |
| **performance-testing-review-ai-review** | "You are an expert AI-powered code review specialist combining automated static analysis; intelligent pattern recognitio | `/home/phyton/.gemini/antigravity/skills/performance-testing-review-ai-review` |
| **performance-testing-review-multi-agent-review** | "Use when working with performance testing review multi agent review" | `/home/phyton/.gemini/antigravity/skills/performance-testing-review-multi-agent-review` |
| **personal-tool-builder** | "Expert in building custom tools that solve your own problems first. The best products often start as personal tools - s | `/home/phyton/.gemini/antigravity/skills/personal-tool-builder` |
| **php-pro** | 'Write idiomatic PHP code with generators; iterators; SPL data | `/home/phyton/.gemini/antigravity/skills/php-pro` |
| **pipedrive-automation** | "Automate Pipedrive CRM operations including deals; contacts; organizations; activities; notes; and pipeline management  | `/home/phyton/.gemini/antigravity/skills/pipedrive-automation` |
| **plaid-fintech** | "Expert patterns for Plaid API integration including Link token flows; transactions sync; identity verification; Auth fo | `/home/phyton/.gemini/antigravity/skills/plaid-fintech` |
| **planning-with-files** | "Implements Manus-style file-based planning for complex tasks. Creates task_plan.md; findings.md; and progress.md. Use w | `/home/phyton/.gemini/antigravity/skills/planning-with-files` |
| **plan-writing** | "Structured task planning with clear breakdowns; dependencies; and verification criteria. Use when implementing features | `/home/phyton/.gemini/antigravity/skills/plan-writing` |
| **playwright-skill** | "Complete browser automation with Playwright. Auto-detects dev servers; writes clean test scripts to /tmp. Test pages; f | `/home/phyton/.gemini/antigravity/skills/playwright-skill` |
| **podcast-generation** | "Generate AI-powered podcast-style audio narratives using Azure OpenAI's GPT Realtime Mini model via WebSocket. Use when | `/home/phyton/.gemini/antigravity/skills/podcast-generation` |
| **popup-cro** | "Create and optimize popups; modals; overlays; slide-ins; and banners to increase conversions without harming user exper | `/home/phyton/.gemini/antigravity/skills/popup-cro` |
| **posix-shell-pro** | Expert in strict POSIX sh scripting for maximum portability across Unix-like systems. Specializes in shell scripts that  | `/home/phyton/.gemini/antigravity/skills/posix-shell-pro` |
| **postgres-best-practices** | "Postgres performance optimization and best practices from Supabase. Use this skill when writing; reviewing; or optimizi | `/home/phyton/.gemini/antigravity/skills/postgres-best-practices` |
| **postgresql-optimization** | "PostgreSQL database optimization workflow for query tuning; indexing strategies; performance analysis; and production d | `/home/phyton/.gemini/antigravity/skills/postgresql-optimization` |
| **postgresql** | "Design a PostgreSQL-specific schema. Covers best-practices; data types; indexing; constraints; performance patterns; an | `/home/phyton/.gemini/antigravity/skills/postgresql` |
| **posthog-automation** | "Automate PostHog tasks via Rube MCP (Composio): events; feature flags; projects; user profiles; annotations. Always sea | `/home/phyton/.gemini/antigravity/skills/posthog-automation` |
| **postmark-automation** | "Automate Postmark email delivery tasks via Rube MCP (Composio): send templated emails; manage templates; monitor delive | `/home/phyton/.gemini/antigravity/skills/postmark-automation` |
| **postmortem-writing** | "Write effective blameless postmortems with root cause analysis; timelines; and action items. Use when conducting incide | `/home/phyton/.gemini/antigravity/skills/postmortem-writing` |
| **powershell-windows** | "PowerShell Windows patterns. Critical pitfalls; operator syntax; error handling." | `/home/phyton/.gemini/antigravity/skills/powershell-windows` |
| **pptx-official** | "Presentation creation; editing; and analysis. When Claude needs to work with presentations (.pptx files) for: (1) Creat | `/home/phyton/.gemini/antigravity/skills/pptx-official` |
| **pptx-official** | "Presentation creation; editing; and analysis. When Claude needs to work with presentations (.pptx files) for: (1) Creat | `/home/phyton/.gemini/antigravity/skills/pptx` |
| **pricing-strategy** | "Design pricing; packaging; and monetization strategies based on value; customer willingness to pay; and growth objectiv | `/home/phyton/.gemini/antigravity/skills/pricing-strategy` |
| **prisma-expert** | "Prisma ORM expert for schema design; migrations; query optimization; relations modeling; and database operations. Use P | `/home/phyton/.gemini/antigravity/skills/prisma-expert` |
| **privilege-escalation-methods** | "This skill should be used when the user asks to \"escalate privileges\"; \"get root access\"; \"become administrator\"; | `/home/phyton/.gemini/antigravity/skills/privilege-escalation-methods` |
| **production-code-audit** | "Autonomously deep-scan entire codebase line-by-line; understand architecture and patterns; then systematically transfor | `/home/phyton/.gemini/antigravity/skills/production-code-audit` |
| **production-scheduling** | Codified expertise for production scheduling; job sequencing; line balancing; changeover optimisation; and bottleneck re | `/home/phyton/.gemini/antigravity/skills/production-scheduling` |
| **product-manager-toolkit** | "Comprehensive toolkit for product managers including RICE prioritization; customer interview analysis; PRD templates; d | `/home/phyton/.gemini/antigravity/skills/product-manager-toolkit` |
| **programmatic-seo** | Design and evaluate programmatic SEO strategies for creating SEO-driven pages at scale using templates and structured da | `/home/phyton/.gemini/antigravity/skills/programmatic-seo` |
| **projection-patterns** | "Build read models and projections from event streams. Use when implementing CQRS read sides; building materialized view | `/home/phyton/.gemini/antigravity/skills/projection-patterns` |
| **prometheus-configuration** | "Set up Prometheus for comprehensive metric collection; storage; and monitoring of infrastructure and applications. Use  | `/home/phyton/.gemini/antigravity/skills/prometheus-configuration` |
| **prompt-caching** | "Caching strategies for LLM prompts including Anthropic prompt caching; response caching; and CAG (Cache Augmented Gener | `/home/phyton/.gemini/antigravity/skills/prompt-caching` |
| **prompt-engineering-patterns** | "Master advanced prompt engineering techniques to maximize LLM performance; reliability; and controllability in producti | `/home/phyton/.gemini/antigravity/skills/prompt-engineering-patterns` |
| **prompt-engineering** | "Expert guide on prompt engineering patterns; best practices; and optimization techniques. Use when user wants to improv | `/home/phyton/.gemini/antigravity/skills/prompt-engineering` |
| **prompt-engineer** | "Transforms user prompts into optimized prompts using frameworks (RTF; RISEN; Chain of Thought; RODES; Chain of Density; | `/home/phyton/.gemini/antigravity/skills/prompt-engineer` |
| **prompt-library** | "Curated collection of high-quality prompts for various use cases. Includes role-based prompts; task-specific templates; | `/home/phyton/.gemini/antigravity/skills/prompt-library` |
| **protocol-reverse-engineering** | "Master network protocol reverse engineering including packet analysis; protocol dissection; and custom protocol documen | `/home/phyton/.gemini/antigravity/skills/protocol-reverse-engineering` |
| **pydantic-models-py** | "Create Pydantic models following the multi-model pattern with Base; Create; Update; Response; and InDB variants. Use wh | `/home/phyton/.gemini/antigravity/skills/pydantic-models-py` |
| **pypict-skill** | "Pairwise test generation" | `/home/phyton/.gemini/antigravity/skills/pypict-skill` |
| **python-development-python-scaffold** | "You are a Python project architecture expert specializing in scaffolding production-ready Python applications. Generate | `/home/phyton/.gemini/antigravity/skills/python-development-python-scaffold` |
| **python-fastapi-development** | "Python FastAPI backend development with async patterns; SQLAlchemy; Pydantic; authentication; and production API patter | `/home/phyton/.gemini/antigravity/skills/python-fastapi-development` |
| **python-packaging** | "Create distributable Python packages with proper project structure; setup.py/pyproject.toml; and publishing to PyPI. Us | `/home/phyton/.gemini/antigravity/skills/python-packaging` |
| **python-patterns** | "Python development principles and decision-making. Framework selection; async patterns; type hints; project structure.  | `/home/phyton/.gemini/antigravity/skills/python-patterns` |
| **python-performance-optimization** | "Profile and optimize Python code using cProfile; memory profilers; and performance best practices. Use when debugging s | `/home/phyton/.gemini/antigravity/skills/python-performance-optimization` |
| **python-pro** | Master Python 3.12+ with modern features; async programming; performance optimization; and production-ready practices. E | `/home/phyton/.gemini/antigravity/skills/python-pro` |
| **python-testing-patterns** | "Implement comprehensive testing strategies with pytest; fixtures; mocking; and test-driven development. Use when writin | `/home/phyton/.gemini/antigravity/skills/python-testing-patterns` |
| **quality-nonconformance** | Codified expertise for quality control; non-conformance investigation; root cause analysis; corrective action; and suppl | `/home/phyton/.gemini/antigravity/skills/quality-nonconformance` |
| **quant-analyst** | Build financial models; backtest trading strategies; and analyze market data. Implements risk metrics; portfolio optimiz | `/home/phyton/.gemini/antigravity/skills/quant-analyst` |
| **radix-ui-design-system** | "Build accessible design systems with Radix UI primitives. Headless component customization; theming strategies; and com | `/home/phyton/.gemini/antigravity/skills/radix-ui-design-system` |
| **rag-engineer** | "Expert in building Retrieval-Augmented Generation systems. Masters embedding models; vector databases; chunking strateg | `/home/phyton/.gemini/antigravity/skills/rag-engineer` |
| **rag-implementation** | "RAG (Retrieval-Augmented Generation) implementation workflow covering embedding selection; vector database setup; chunk | `/home/phyton/.gemini/antigravity/skills/rag-implementation` |
| **react-best-practices** | "React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing;  | `/home/phyton/.gemini/antigravity/skills/react-best-practices` |
| **react-flow-architect** | "Expert ReactFlow architect for building interactive graph applications with hierarchical node-edge systems; performance | `/home/phyton/.gemini/antigravity/skills/react-flow-architect` |
| **react-flow-node-ts** | "Create React Flow node components with TypeScript types; handles; and Zustand integration. Use when building custom nod | `/home/phyton/.gemini/antigravity/skills/react-flow-node-ts` |
| **react-modernization** | "Upgrade React applications to latest versions; migrate from class components to hooks; and adopt concurrent features. U | `/home/phyton/.gemini/antigravity/skills/react-modernization` |
| **react-native-architecture** | "Build production React Native apps with Expo; navigation; native modules; offline sync; and cross-platform patterns. Us | `/home/phyton/.gemini/antigravity/skills/react-native-architecture` |
| **react-nextjs-development** | "React and Next.js 14+ application development with App Router; Server Components; TypeScript; Tailwind CSS; and modern  | `/home/phyton/.gemini/antigravity/skills/react-nextjs-development` |
| **react-patterns** | "Modern React patterns and principles. Hooks; composition; performance; TypeScript best practices." | `/home/phyton/.gemini/antigravity/skills/react-patterns` |
| **react-state-management** | "Master modern React state management with Redux Toolkit; Zustand; Jotai; and React Query. Use when setting up global st | `/home/phyton/.gemini/antigravity/skills/react-state-management` |
| **react-ui-patterns** | "Modern React UI patterns for loading states; error handling; and data fetching. Use when building UI components; handli | `/home/phyton/.gemini/antigravity/skills/react-ui-patterns` |
| **readme** | "When the user wants to create or update a README.md file for a project. Also use when the user says 'write readme;' 'cr | `/home/phyton/.gemini/antigravity/skills/readme` |
| **receiving-code-review** | "Use when receiving code review feedback; before implementing suggestions; especially if feedback seems unclear or techn | `/home/phyton/.gemini/antigravity/skills/receiving-code-review` |
| **reddit-automation** | "Automate Reddit tasks via Rube MCP (Composio): search subreddits; create posts; manage comments; and browse top content | `/home/phyton/.gemini/antigravity/skills/reddit-automation` |
| **red-team-tactics** | "Red team tactics principles based on MITRE ATT&CK. Attack phases; detection evasion; reporting." | `/home/phyton/.gemini/antigravity/skills/red-team-tactics` |
| **red-team-tools** | "This skill should be used when the user asks to \"follow red team methodology\"; \"perform bug bounty hunting\"; \"auto | `/home/phyton/.gemini/antigravity/skills/red-team-tools` |
| **reference-builder** | Creates exhaustive technical references and API documentation. Generates comprehensive parameter listings; configuration | `/home/phyton/.gemini/antigravity/skills/reference-builder` |
| **referral-program** | "When the user wants to create; optimize; or analyze a referral program; affiliate program; or word-of-mouth strategy. A | `/home/phyton/.gemini/antigravity/skills/referral-program` |
| **remotion-best-practices** | "Best practices for Remotion - Video creation in React" | `/home/phyton/.gemini/antigravity/skills/remotion-best-practices` |
| **render-automation** | "Automate Render tasks via Rube MCP (Composio): services; deployments; projects. Always search tools first for current s | `/home/phyton/.gemini/antigravity/skills/render-automation` |
| **requesting-code-review** | "Use when completing tasks; implementing major features; or before merging to verify work meets requirements" | `/home/phyton/.gemini/antigravity/skills/requesting-code-review` |
| **research-engineer** | "An uncompromising Academic Research Engineer. Operates with absolute scientific rigor; objective criticism; and zero fl | `/home/phyton/.gemini/antigravity/skills/research-engineer` |
| **returns-reverse-logistics** | Codified expertise for returns authorisation; receipt and inspection; disposition decisions; refund processing; fraud de | `/home/phyton/.gemini/antigravity/skills/returns-reverse-logistics` |
| **reverse-engineer** | Expert reverse engineer specializing in binary analysis; disassembly; decompilation; and software analysis. Masters IDA  | `/home/phyton/.gemini/antigravity/skills/reverse-engineer` |
| **risk-manager** | Monitor portfolio risk; R-multiples; and position limits. Creates hedging strategies; calculates expectancy; and impleme | `/home/phyton/.gemini/antigravity/skills/risk-manager` |
| **risk-metrics-calculation** | "Calculate portfolio risk metrics including VaR; CVaR; Sharpe; Sortino; and drawdown analysis. Use when measuring portfo | `/home/phyton/.gemini/antigravity/skills/risk-metrics-calculation` |
| **ruby-pro** | Write idiomatic Ruby code with metaprogramming; Rails patterns; and performance optimization. Specializes in Ruby on Rai | `/home/phyton/.gemini/antigravity/skills/ruby-pro` |
| **rust-async-patterns** | "Master Rust async programming with Tokio; async traits; error handling; and concurrent patterns. Use when building asyn | `/home/phyton/.gemini/antigravity/skills/rust-async-patterns` |
| **rust-pro** | Master Rust 1.75+ with modern async patterns; advanced type system features; and production-ready systems programming. | `/home/phyton/.gemini/antigravity/skills/rust-pro` |
| **saga-orchestration** | "Implement saga patterns for distributed transactions and cross-aggregate workflows. Use when coordinating multi-step bu | `/home/phyton/.gemini/antigravity/skills/saga-orchestration` |
| **sales-automator** | 'Draft cold emails; follow-ups; and proposal templates. Creates | `/home/phyton/.gemini/antigravity/skills/sales-automator` |
| **salesforce-automation** | "Automate Salesforce tasks via Rube MCP (Composio): leads; contacts; accounts; opportunities; SOQL queries. Always searc | `/home/phyton/.gemini/antigravity/skills/salesforce-automation` |
| **salesforce-development** | "Expert patterns for Salesforce platform development including Lightning Web Components (LWC); Apex triggers and classes | `/home/phyton/.gemini/antigravity/skills/salesforce-development` |
| **sast-configuration** | "Configure Static Application Security Testing (SAST) tools for automated vulnerability detection in application code. U | `/home/phyton/.gemini/antigravity/skills/sast-configuration` |
| **scala-pro** | Master enterprise-grade Scala development with functional programming; distributed systems; and big data processing. Exp | `/home/phyton/.gemini/antigravity/skills/scala-pro` |
| **scanning-tools** | "This skill should be used when the user asks to \"perform vulnerability scanning\"; \"scan networks for open ports\"; \ | `/home/phyton/.gemini/antigravity/skills/scanning-tools` |
| **schema-markup** | Design; validate; and optimize schema.org structured data for eligibility; correctness; and measurable SEO impact. | `/home/phyton/.gemini/antigravity/skills/schema-markup` |
| **screen-reader-testing** | "Test web applications with screen readers including VoiceOver; NVDA; and JAWS. Use when validating screen reader compat | `/home/phyton/.gemini/antigravity/skills/screen-reader-testing` |
| **screenshots** | "Generate marketing screenshots of your app using Playwright. Use when the user wants to create screenshots for Product  | `/home/phyton/.gemini/antigravity/skills/screenshots` |
| **scroll-experience** | "Expert in building immersive scroll-driven experiences - parallax storytelling; scroll animations; interactive narrativ | `/home/phyton/.gemini/antigravity/skills/scroll-experience` |
| **search-specialist** | "Expert web researcher using advanced search techniques and" | `/home/phyton/.gemini/antigravity/skills/search-specialist` |
| **secrets-management** | "Implement secure secrets management for CI/CD pipelines using Vault; AWS Secrets Manager; or native platform solutions. | `/home/phyton/.gemini/antigravity/skills/secrets-management` |
| **security-auditor** | Expert security auditor specializing in DevSecOps; comprehensive cybersecurity; and compliance frameworks. | `/home/phyton/.gemini/antigravity/skills/security-auditor` |
| **security-audit** | "Comprehensive security auditing workflow covering web application testing; API security; penetration testing; vulnerabi | `/home/phyton/.gemini/antigravity/skills/security-audit` |
| **aws-compliance-checker** | "Automated compliance checking against CIS; PCI-DSS; HIPAA; and SOC 2 benchmarks" | `/home/phyton/.gemini/antigravity/skills/security/aws-compliance-checker` |
| **aws-iam-best-practices** | "IAM policy review; hardening; and least privilege implementation" | `/home/phyton/.gemini/antigravity/skills/security/aws-iam-best-practices` |
| **aws-secrets-rotation** | "Automate AWS secrets rotation for RDS; API keys; and credentials" | `/home/phyton/.gemini/antigravity/skills/security/aws-secrets-rotation` |
| **aws-security-audit** | "Comprehensive AWS security posture assessment using AWS CLI and security best practices" | `/home/phyton/.gemini/antigravity/skills/security/aws-security-audit` |
| **security-bluebook-builder** | "Build security Blue Books for sensitive apps" | `/home/phyton/.gemini/antigravity/skills/security-bluebook-builder` |
| **security-compliance-compliance-check** | "You are a compliance expert specializing in regulatory requirements for software systems including GDPR; HIPAA; SOC2; P | `/home/phyton/.gemini/antigravity/skills/security-compliance-compliance-check` |
| **security-requirement-extraction** | "Derive security requirements from threat models and business context. Use when translating threats into actionable requ | `/home/phyton/.gemini/antigravity/skills/security-requirement-extraction` |
| **security-scanning-security-dependencies** | "You are a security expert specializing in dependency vulnerability analysis; SBOM generation; and supply chain security | `/home/phyton/.gemini/antigravity/skills/security-scanning-security-dependencies` |
| **security-scanning-security-hardening** | "Coordinate multi-layer security scanning and hardening across application; infrastructure; and compliance controls." | `/home/phyton/.gemini/antigravity/skills/security-scanning-security-hardening` |
| **security-scanning-security-sast** | 'Static Application Security Testing (SAST) for code vulnerability | `/home/phyton/.gemini/antigravity/skills/security-scanning-security-sast` |
| **segment-automation** | "Automate Segment tasks via Rube MCP (Composio): track events; identify users; manage groups; page views; aliases; batch | `/home/phyton/.gemini/antigravity/skills/segment-automation` |
| **segment-cdp** | "Expert patterns for Segment Customer Data Platform including Analytics.js; server-side tracking; tracking plans with Pr | `/home/phyton/.gemini/antigravity/skills/segment-cdp` |
| **sendgrid-automation** | "Automate SendGrid email operations including sending emails; managing contacts/lists; sender identities; templates; and | `/home/phyton/.gemini/antigravity/skills/sendgrid-automation` |
| **senior-architect** | "Comprehensive software architecture skill for designing scalable; maintainable systems using ReactJS; NextJS; NodeJS; E | `/home/phyton/.gemini/antigravity/skills/senior-architect` |
| **senior-fullstack** | "Comprehensive fullstack development skill for building complete web applications with React; Next.js; Node.js; GraphQL; | `/home/phyton/.gemini/antigravity/skills/senior-fullstack` |
| **sentry-automation** | "Automate Sentry tasks via Rube MCP (Composio): manage issues/events; configure alerts; track releases; monitor projects | `/home/phyton/.gemini/antigravity/skills/sentry-automation` |
| **seo-audit** | Diagnose and audit SEO issues affecting crawlability; indexation; rankings; and organic performance. | `/home/phyton/.gemini/antigravity/skills/seo-audit` |
| **seo-authority-builder** | 'Analyzes content for E-E-A-T signals and suggests improvements to | `/home/phyton/.gemini/antigravity/skills/seo-authority-builder` |
| **seo-cannibalization-detector** | Analyzes multiple provided pages to identify keyword overlap and potential cannibalization issues. Suggests differentiat | `/home/phyton/.gemini/antigravity/skills/seo-cannibalization-detector` |
| **seo-content-auditor** | Analyzes provided content for quality; E-E-A-T signals; and SEO best practices. Scores content and provides improvement  | `/home/phyton/.gemini/antigravity/skills/seo-content-auditor` |
| **seo-content-planner** | 'Creates comprehensive content outlines and topic clusters for SEO. | `/home/phyton/.gemini/antigravity/skills/seo-content-planner` |
| **seo-content-refresher** | Identifies outdated elements in provided content and suggests updates to maintain freshness. Finds statistics; dates; an | `/home/phyton/.gemini/antigravity/skills/seo-content-refresher` |
| **seo-content-writer** | Writes SEO-optimized content based on provided keywords and topic briefs. Creates engaging; comprehensive content follow | `/home/phyton/.gemini/antigravity/skills/seo-content-writer` |
| **seo-forensic-incident-response** | "Investigate sudden drops in organic traffic or rankings and run a structured forensic SEO incident response with triage | `/home/phyton/.gemini/antigravity/skills/seo-forensic-incident-response` |
| **seo-fundamentals** | Core principles of SEO including E-E-A-T; Core Web Vitals; technical foundations; content quality; and how modern search | `/home/phyton/.gemini/antigravity/skills/seo-fundamentals` |
| **seo-keyword-strategist** | Analyzes keyword usage in provided content; calculates density; suggests semantic variations and LSI keywords based on t | `/home/phyton/.gemini/antigravity/skills/seo-keyword-strategist` |
| **seo-meta-optimizer** | Creates optimized meta titles; descriptions; and URL suggestions based on character limits and best practices. Generates | `/home/phyton/.gemini/antigravity/skills/seo-meta-optimizer` |
| **seo-snippet-hunter** | Formats content to be eligible for featured snippets and SERP features. Creates snippet-optimized content blocks based o | `/home/phyton/.gemini/antigravity/skills/seo-snippet-hunter` |
| **seo-structure-architect** | Analyzes and optimizes content structure including header hierarchy; suggests schema markup; and internal linking opport | `/home/phyton/.gemini/antigravity/skills/seo-structure-architect` |
| **server-management** | "Server management principles and decision-making. Process management; monitoring strategy; and scaling decisions. Teach | `/home/phyton/.gemini/antigravity/skills/server-management` |
| **service-mesh-expert** | "Expert service mesh architect specializing in Istio; Linkerd; and cloud-native networking patterns. Masters traffic man | `/home/phyton/.gemini/antigravity/skills/service-mesh-expert` |
| **service-mesh-observability** | "Implement comprehensive observability for service meshes including distributed tracing; metrics; and visualization. Use | `/home/phyton/.gemini/antigravity/skills/service-mesh-observability` |
| **shader-programming-glsl** | "Expert guide for writing efficient GLSL shaders (Vertex/Fragment) for web and game engines; covering syntax; uniforms;  | `/home/phyton/.gemini/antigravity/skills/shader-programming-glsl` |
| **sharp-edges** | "Identify error-prone APIs and dangerous configurations" | `/home/phyton/.gemini/antigravity/skills/sharp-edges` |
| **shellcheck-configuration** | "Master ShellCheck static analysis configuration and usage for shell script quality. Use when setting up linting infrast | `/home/phyton/.gemini/antigravity/skills/shellcheck-configuration` |
| **shodan-reconnaissance** | "This skill should be used when the user asks to \"search for exposed devices on the internet;\" \"perform Shodan reconn | `/home/phyton/.gemini/antigravity/skills/shodan-reconnaissance` |
| **shopify-apps** | "Expert patterns for Shopify app development including Remix/React Router apps; embedded apps with App Bridge; webhook h | `/home/phyton/.gemini/antigravity/skills/shopify-apps` |
| **shopify-automation** | "Automate Shopify tasks via Rube MCP (Composio): products; orders; customers; inventory; collections. Always search tool | `/home/phyton/.gemini/antigravity/skills/shopify-automation` |
| **shopify-development** | Build Shopify apps; extensions; themes using GraphQL Admin API; Shopify CLI; Polaris UI; and Liquid. | `/home/phyton/.gemini/antigravity/skills/shopify-development` |
| **signup-flow-cro** | "When the user wants to optimize signup; registration; account creation; or trial activation flows. Also use when the us | `/home/phyton/.gemini/antigravity/skills/signup-flow-cro` |
| **similarity-search-patterns** | "Implement efficient similarity search with vector databases. Use when building semantic search; implementing nearest ne | `/home/phyton/.gemini/antigravity/skills/similarity-search-patterns` |
| **skill-creator-ms** | "Guide for creating effective skills for AI coding agents working with Azure SDKs and Microsoft Foundry services. Use wh | `/home/phyton/.gemini/antigravity/skills/skill-creator-ms` |
| **skill-creator** | "This skill should be used when the user asks to create a new skill; build a skill; make a custom skill; develop a CLI s | `/home/phyton/.gemini/antigravity/skills/skill-creator` |
| **skill-developer** | "Create and manage Claude Code skills following Anthropic best practices. Use when creating new skills; modifying skill- | `/home/phyton/.gemini/antigravity/skills/skill-developer` |
| **skill-rails-upgrade** | "Analyze Rails apps and provide upgrade assessments" | `/home/phyton/.gemini/antigravity/skills/skill-rails-upgrade` |
| **skill-seekers** | "-Automatically convert documentation websites; GitHub repositories; and PDFs into Claude AI skills in minutes." | `/home/phyton/.gemini/antigravity/skills/skill-seekers` |
| **slack-automation** | "Automate Slack messaging; channel management; search; reactions; and threads via Rube MCP (Composio). Send messages; se | `/home/phyton/.gemini/antigravity/skills/slack-automation` |
| **slack-bot-builder** | "Build Slack apps using the Bolt framework across Python; JavaScript; and Java. Covers Block Kit for rich UIs; interacti | `/home/phyton/.gemini/antigravity/skills/slack-bot-builder` |
| **slack-gif-creator** | "Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints; validation tools; and ani | `/home/phyton/.gemini/antigravity/skills/slack-gif-creator` |
| **slo-implementation** | "Define and implement Service Level Indicators (SLIs) and Service Level Objectives (SLOs) with error budgets and alertin | `/home/phyton/.gemini/antigravity/skills/slo-implementation` |
| **smtp-penetration-testing** | "This skill should be used when the user asks to \"perform SMTP penetration testing\"; \"enumerate email users\"; \"test | `/home/phyton/.gemini/antigravity/skills/smtp-penetration-testing` |
| **social-content** | "When the user wants help creating; scheduling; or optimizing social media content for LinkedIn; Twitter/X; Instagram; T | `/home/phyton/.gemini/antigravity/skills/social-content` |
| **software-architecture** | "Guide for quality focused software architecture. This skill should be used when users want to write code; design archit | `/home/phyton/.gemini/antigravity/skills/software-architecture` |
| **solidity-security** | "Master smart contract security best practices to prevent common vulnerabilities and implement secure Solidity patterns. | `/home/phyton/.gemini/antigravity/skills/solidity-security` |
| **spark-optimization** | "Optimize Apache Spark jobs with partitioning; caching; shuffle optimization; and memory tuning. Use when improving Spar | `/home/phyton/.gemini/antigravity/skills/spark-optimization` |
| **sql-injection-testing** | "This skill should be used when the user asks to \"test for SQL injection vulnerabilities\"; \"perform SQLi attacks\"; \ | `/home/phyton/.gemini/antigravity/skills/sql-injection-testing` |
| **sqlmap-database-pentesting** | "This skill should be used when the user asks to \"automate SQL injection testing;\" \"enumerate database structure;\" \ | `/home/phyton/.gemini/antigravity/skills/sqlmap-database-pentesting` |
| **sql-optimization-patterns** | "Master SQL query optimization; indexing strategies; and EXPLAIN analysis to dramatically improve database performance a | `/home/phyton/.gemini/antigravity/skills/sql-optimization-patterns` |
| **sql-pro** | Master modern SQL with cloud-native databases; OLTP/OLAP optimization; and advanced query techniques. Expert in performa | `/home/phyton/.gemini/antigravity/skills/sql-pro` |
| **square-automation** | "Automate Square tasks via Rube MCP (Composio): payments; orders; invoices; locations. Always search tools first for cur | `/home/phyton/.gemini/antigravity/skills/square-automation` |
| **ssh-penetration-testing** | "This skill should be used when the user asks to \"pentest SSH services\"; \"enumerate SSH configurations\"; \"brute for | `/home/phyton/.gemini/antigravity/skills/ssh-penetration-testing` |
| **startup-analyst** | Expert startup business analyst specializing in market sizing; financial modeling; competitive analysis; and strategic p | `/home/phyton/.gemini/antigravity/skills/startup-analyst` |
| **startup-business-analyst-business-case** | 'Generate comprehensive investor-ready business case document with | `/home/phyton/.gemini/antigravity/skills/startup-business-analyst-business-case` |
| **startup-business-analyst-financial-projections** | 'Create detailed 3-5 year financial model with revenue; costs; cash | `/home/phyton/.gemini/antigravity/skills/startup-business-analyst-financial-projections` |
| **startup-business-analyst-market-opportunity** | 'Generate comprehensive market opportunity analysis with TAM/SAM/SOM | `/home/phyton/.gemini/antigravity/skills/startup-business-analyst-market-opportunity` |
| **startup-financial-modeling** | This skill should be used when the user asks to \\\"create financial projections"; "build a financial model"; "forecast  | `/home/phyton/.gemini/antigravity/skills/startup-financial-modeling` |
| **startup-metrics-framework** | This skill should be used when the user asks about \\\"key startup metrics"; "SaaS metrics"; "CAC and LTV"; "unit econom | `/home/phyton/.gemini/antigravity/skills/startup-metrics-framework` |
| **stitch-ui-design** | "Expert guide for creating effective prompts for Google Stitch AI UI design tool. Use when user wants to design UI/UX in | `/home/phyton/.gemini/antigravity/skills/stitch-ui-design` |
| **stride-analysis-patterns** | "Apply STRIDE methodology to systematically identify threats. Use when analyzing system security; conducting threat mode | `/home/phyton/.gemini/antigravity/skills/stride-analysis-patterns` |
| **stripe-automation** | "Automate Stripe tasks via Rube MCP (Composio): customers; charges; subscriptions; invoices; products; refunds. Always s | `/home/phyton/.gemini/antigravity/skills/stripe-automation` |
| **stripe-integration** | "Implement Stripe payment processing for robust; PCI-compliant payment flows including checkout; subscriptions; and webh | `/home/phyton/.gemini/antigravity/skills/stripe-integration` |
| **subagent-driven-development** | "Use when executing implementation plans with independent tasks in the current session" | `/home/phyton/.gemini/antigravity/skills/subagent-driven-development` |
| **supabase-automation** | "Automate Supabase database queries; table management; project administration; storage; edge functions; and SQL executio | `/home/phyton/.gemini/antigravity/skills/supabase-automation` |
| **superpowers-lab** | "Lab environment for Claude superpowers" | `/home/phyton/.gemini/antigravity/skills/superpowers-lab` |
| **swiftui-expert-skill** | "Write; review; or improve SwiftUI code following best practices for state management; view composition; performance; mo | `/home/phyton/.gemini/antigravity/skills/swiftui-expert-skill` |
| **systematic-debugging** | "Use when encountering any bug; test failure; or unexpected behavior; before proposing fixes" | `/home/phyton/.gemini/antigravity/skills/systematic-debugging` |
| **systems-programming-rust-project** | "You are a Rust project architecture expert specializing in scaffolding production-ready Rust applications. Generate com | `/home/phyton/.gemini/antigravity/skills/systems-programming-rust-project` |
| **tailwind-design-system** | "Build scalable design systems with Tailwind CSS; design tokens; component libraries; and responsive patterns. Use when  | `/home/phyton/.gemini/antigravity/skills/tailwind-design-system` |
| **tailwind-patterns** | "Tailwind CSS v4 principles. CSS-first configuration; container queries; modern patterns; design token architecture." | `/home/phyton/.gemini/antigravity/skills/tailwind-patterns` |
| **tavily-web** | "Web search; content extraction; crawling; and research capabilities using Tavily API" | `/home/phyton/.gemini/antigravity/skills/tavily-web` |
| **tdd-orchestrator** | Master TDD orchestrator specializing in red-green-refactor discipline; multi-agent workflow coordination; and comprehens | `/home/phyton/.gemini/antigravity/skills/tdd-orchestrator` |
| **tdd-workflow** | "Test-Driven Development workflow principles. RED-GREEN-REFACTOR cycle." | `/home/phyton/.gemini/antigravity/skills/tdd-workflow` |
| **tdd-workflows-tdd-cycle** | "Use when working with tdd workflows tdd cycle" | `/home/phyton/.gemini/antigravity/skills/tdd-workflows-tdd-cycle` |
| **tdd-workflows-tdd-green** | "Implement the minimal code needed to make failing tests pass in the TDD green phase." | `/home/phyton/.gemini/antigravity/skills/tdd-workflows-tdd-green` |
| **tdd-workflows-tdd-red** | "Generate failing tests for the TDD red phase to define expected behavior and edge cases." | `/home/phyton/.gemini/antigravity/skills/tdd-workflows-tdd-red` |
| **tdd-workflows-tdd-refactor** | "Use when working with tdd workflows tdd refactor" | `/home/phyton/.gemini/antigravity/skills/tdd-workflows-tdd-refactor` |
| **team-collaboration-issue** | "You are a GitHub issue resolution expert specializing in systematic bug investigation; feature implementation; and coll | `/home/phyton/.gemini/antigravity/skills/team-collaboration-issue` |
| **team-collaboration-standup-notes** | "You are an expert team communication specialist focused on async-first standup practices; AI-assisted note generation f | `/home/phyton/.gemini/antigravity/skills/team-collaboration-standup-notes` |
| **team-composition-analysis** | This skill should be used when the user asks to \\\"plan team structure"; "determine hiring needs"; "design org chart";  | `/home/phyton/.gemini/antigravity/skills/team-composition-analysis` |
| **telegram-automation** | "Automate Telegram tasks via Rube MCP (Composio): send messages; manage chats; share photos/documents; and handle bot co | `/home/phyton/.gemini/antigravity/skills/telegram-automation` |
| **telegram-bot-builder** | "Expert in building Telegram bots that solve real problems - from simple automation to complex AI-powered bots. Covers b | `/home/phyton/.gemini/antigravity/skills/telegram-bot-builder` |
| **telegram-mini-app** | "Expert in building Telegram Mini Apps (TWA) - web apps that run inside Telegram with native-like experience. Covers the | `/home/phyton/.gemini/antigravity/skills/telegram-mini-app` |
| **temporal-golang-pro** | "Use when building durable distributed systems with Temporal Go SDK. Covers deterministic workflow rules; mTLS worker co | `/home/phyton/.gemini/antigravity/skills/temporal-golang-pro` |
| **temporal-python-pro** | Master Temporal workflow orchestration with Python SDK. Implements durable workflows; saga patterns; and distributed tra | `/home/phyton/.gemini/antigravity/skills/temporal-python-pro` |
| **temporal-python-testing** | "Test Temporal workflows with pytest; time-skipping; and mocking strategies. Covers unit testing; integration testing; r | `/home/phyton/.gemini/antigravity/skills/temporal-python-testing` |
| **terraform-aws-modules** | "Terraform module creation for AWS — reusable modules; state management; and HCL best practices. Use when building or  | `/home/phyton/.gemini/antigravity/skills/terraform-aws-modules` |
| **terraform-infrastructure** | "Terraform infrastructure as code workflow for provisioning cloud resources; creating reusable modules; and managing inf | `/home/phyton/.gemini/antigravity/skills/terraform-infrastructure` |
| **terraform-module-library** | "Build reusable Terraform modules for AWS; Azure; and GCP infrastructure following infrastructure-as-code best practices | `/home/phyton/.gemini/antigravity/skills/terraform-module-library` |
| **terraform-skill** | "Terraform infrastructure as code best practices" | `/home/phyton/.gemini/antigravity/skills/terraform-skill` |
| **terraform-specialist** | Expert Terraform/OpenTofu specialist mastering advanced IaC automation; state management; and enterprise infrastructure  | `/home/phyton/.gemini/antigravity/skills/terraform-specialist` |
| **test-automator** | Master AI-powered test automation with modern frameworks; self-healing tests; and comprehensive quality engineering. Bui | `/home/phyton/.gemini/antigravity/skills/test-automator` |
| **test-driven-development** | "Use when implementing any feature or bugfix; before writing implementation code" | `/home/phyton/.gemini/antigravity/skills/test-driven-development` |
| **test-fixing** | "Run tests and systematically fix all failing tests using smart error grouping. Use when user asks to fix failing tests; | `/home/phyton/.gemini/antigravity/skills/test-fixing` |
| **testing-patterns** | "Jest testing patterns; factory functions; mocking strategies; and TDD workflow. Use when writing unit tests; creating t | `/home/phyton/.gemini/antigravity/skills/testing-patterns` |
| **testing-qa** | "Comprehensive testing and QA workflow covering unit testing; integration testing; E2E testing; browser automation; and  | `/home/phyton/.gemini/antigravity/skills/testing-qa` |
| **theme-factory** | "Toolkit for styling artifacts with a theme. These artifacts can be slides; docs; reportings; HTML landing pages; etc. T | `/home/phyton/.gemini/antigravity/skills/theme-factory` |
| **threat-mitigation-mapping** | "Map identified threats to appropriate security controls and mitigations. Use when prioritizing security investments; cr | `/home/phyton/.gemini/antigravity/skills/threat-mitigation-mapping` |
| **threat-modeling-expert** | "Expert in threat modeling methodologies; security architecture review; and risk assessment. Masters STRIDE; PASTA; atta | `/home/phyton/.gemini/antigravity/skills/threat-modeling-expert` |
| **threejs-skills** | "Create 3D scenes; interactive experiences; and visual effects using Three.js. Use when user requests 3D graphics; WebGL | `/home/phyton/.gemini/antigravity/skills/threejs-skills` |
| **tiktok-automation** | "Automate TikTok tasks via Rube MCP (Composio): upload/publish videos; post photos; manage content; and view user profil | `/home/phyton/.gemini/antigravity/skills/tiktok-automation` |
| **todoist-automation** | "Automate Todoist task management; projects; sections; filtering; and bulk operations via Rube MCP (Composio). Always se | `/home/phyton/.gemini/antigravity/skills/todoist-automation` |
| **tool-design** | "Build tools that agents can use effectively; including architectural reduction patterns" | `/home/phyton/.gemini/antigravity/skills/tool-design` |
| **top-web-vulnerabilities** | "This skill should be used when the user asks to \"identify web application vulnerabilities\"; \"explain common security | `/home/phyton/.gemini/antigravity/skills/top-web-vulnerabilities` |
| **track-management** | Use this skill when creating; managing; or working with Conductor tracks - the logical work units for features; bugs; an | `/home/phyton/.gemini/antigravity/skills/track-management` |
| **trello-automation** | "Automate Trello boards; cards; and workflows via Rube MCP (Composio). Create cards; manage lists; assign members; and s | `/home/phyton/.gemini/antigravity/skills/trello-automation` |
| **trigger-dev** | "Trigger.dev expert for background jobs; AI workflows; and reliable async execution with excellent developer experience  | `/home/phyton/.gemini/antigravity/skills/trigger-dev` |
| **turborepo-caching** | "Configure Turborepo for efficient monorepo builds with local and remote caching. Use when setting up Turborepo; optimiz | `/home/phyton/.gemini/antigravity/skills/turborepo-caching` |
| **tutorial-engineer** | Creates step-by-step tutorials and educational content from code. Transforms complex concepts into progressive learning  | `/home/phyton/.gemini/antigravity/skills/tutorial-engineer` |
| **twilio-communications** | "Build communication features with Twilio: SMS messaging; voice calls; WhatsApp Business API; and user verification (2FA | `/home/phyton/.gemini/antigravity/skills/twilio-communications` |
| **twitter-automation** | "Automate Twitter/X tasks via Rube MCP (Composio): posts; search; users; bookmarks; lists; media. Always search tools fi | `/home/phyton/.gemini/antigravity/skills/twitter-automation` |
| **typescript-advanced-types** | "Master TypeScript's advanced type system including generics; conditional types; mapped types; template literals; and ut | `/home/phyton/.gemini/antigravity/skills/typescript-advanced-types` |
| **typescript-expert** | TypeScript and JavaScript expert with deep knowledge of type-level programming; performance optimization; monorepo manag | `/home/phyton/.gemini/antigravity/skills/typescript-expert` |
| **typescript-pro** | Master TypeScript with advanced types; generics; and strict type safety. Handles complex type systems; decorators; and e | `/home/phyton/.gemini/antigravity/skills/typescript-pro` |
| **ui-skills** | "Opinionated; evolving constraints to guide agents when building interfaces" | `/home/phyton/.gemini/antigravity/skills/ui-skills` |
| **ui-ux-designer** | Create interface designs; wireframes; and design systems. Masters user research; accessibility standards; and modern des | `/home/phyton/.gemini/antigravity/skills/ui-ux-designer` |
| **ui-ux-pro-max** | "UI/UX design intelligence. 50 styles; 21 palettes; 50 font pairings; 20 charts; 9 stacks (React; Next.js; Vue; Svelte;  | `/home/phyton/.gemini/antigravity/skills/ui-ux-pro-max` |
| **ui-visual-validator** | Rigorous visual validation expert specializing in UI testing; design system compliance; and accessibility verification. | `/home/phyton/.gemini/antigravity/skills/ui-visual-validator` |
| **unit-testing-test-generate** | "Generate comprehensive; maintainable unit tests across languages with strong coverage and edge case focus." | `/home/phyton/.gemini/antigravity/skills/unit-testing-test-generate` |
| **unity-developer** | Build Unity games with optimized C# scripts; efficient rendering; and proper asset management. Masters Unity 6 LTS; URP/ | `/home/phyton/.gemini/antigravity/skills/unity-developer` |
| **unity-ecs-patterns** | "Master Unity ECS (Entity Component System) with DOTS; Jobs; and Burst for high-performance game development. Use when b | `/home/phyton/.gemini/antigravity/skills/unity-ecs-patterns` |
| **unreal-engine-cpp-pro** | "Expert guide for Unreal Engine 5.x C++ development; covering UObject hygiene; performance patterns; and best practices. | `/home/phyton/.gemini/antigravity/skills/unreal-engine-cpp-pro` |
| **upgrading-expo** | "Upgrade Expo SDK versions" | `/home/phyton/.gemini/antigravity/skills/upgrading-expo` |
| **upstash-qstash** | "Upstash QStash expert for serverless message queues; scheduled jobs; and reliable HTTP-based task delivery without mana | `/home/phyton/.gemini/antigravity/skills/upstash-qstash` |
| **using-git-worktrees** | "Use when starting feature work that needs isolation from current workspace or before executing implementation plans - c | `/home/phyton/.gemini/antigravity/skills/using-git-worktrees` |
| **using-neon** | "Guides and best practices for working with Neon Serverless Postgres. Covers getting started; local development with Neo | `/home/phyton/.gemini/antigravity/skills/using-neon` |
| **using-superpowers** | "Use when starting any conversation - establishes how to find and use skills; requiring Skill tool invocation before ANY | `/home/phyton/.gemini/antigravity/skills/using-superpowers` |
| **uv-package-manager** | "Master the uv package manager for fast Python dependency management; virtual environments; and modern Python project wo | `/home/phyton/.gemini/antigravity/skills/uv-package-manager` |
| **varlock-claude-skill** | "Secure environment variable management ensuring secrets are never exposed in Claude sessions; terminals; logs; or git c | `/home/phyton/.gemini/antigravity/skills/varlock-claude-skill` |
| **vector-database-engineer** | "Expert in vector databases; embedding strategies; and semantic search implementation. Masters Pinecone; Weaviate; Qdran | `/home/phyton/.gemini/antigravity/skills/vector-database-engineer` |
| **vector-index-tuning** | "Optimize vector index performance for latency; recall; and memory. Use when tuning HNSW parameters; selecting quantizat | `/home/phyton/.gemini/antigravity/skills/vector-index-tuning` |
| **vercel-automation** | "Automate Vercel tasks via Rube MCP (Composio): manage deployments; domains; DNS; env vars; projects; and teams. Always  | `/home/phyton/.gemini/antigravity/skills/vercel-automation` |
| **vercel-deploy-claimable** | "Deploy applications and websites to Vercel. Use this skill when the user requests deployment actions such as 'Deploy my | `/home/phyton/.gemini/antigravity/skills/vercel-deploy-claimable` |
| **vercel-deployment** | "Expert knowledge for deploying to Vercel with Next.js Use when: vercel; deploy; deployment; hosting; production." | `/home/phyton/.gemini/antigravity/skills/vercel-deployment` |
| **verification-before-completion** | "Use when about to claim work is complete; fixed; or passing; before committing or creating PRs - requires running verif | `/home/phyton/.gemini/antigravity/skills/verification-before-completion` |
| **vexor** | "Vector-powered CLI for semantic file search with a Claude/Codex skill" | `/home/phyton/.gemini/antigravity/skills/vexor` |
| **vibe-code-auditor** | Audit rapidly generated or AI-produced code for structural flaws; fragility; and production risks. | `/home/phyton/.gemini/antigravity/skills/vibe-code-auditor` |
| **videodb** | Video and audio perception; indexing; and editing. Ingest files/URLs/live streams; build visual/spoken indexes; search w | `/home/phyton/.gemini/antigravity/skills/videodb` |
| **videodb-skills** | "Upload; stream; search; edit; transcribe; and generate AI video and audio using the VideoDB SDK." | `/home/phyton/.gemini/antigravity/skills/videodb-skills` |
| **viral-generator-builder** | "Expert in building shareable generator tools that go viral - name generators; quiz makers; avatar creators; personality | `/home/phyton/.gemini/antigravity/skills/viral-generator-builder` |
| **voice-agents** | "Voice agents represent the frontier of AI interaction - humans speaking naturally with AI systems. The challenge isn't  | `/home/phyton/.gemini/antigravity/skills/voice-agents` |
| **voice-ai-development** | "Expert in building voice AI applications - from real-time voice agents to voice-enabled apps. Covers OpenAI Realtime AP | `/home/phyton/.gemini/antigravity/skills/voice-ai-development` |
| **voice-ai-engine-development** | "Build real-time conversational AI voice engines using async worker pipelines; streaming transcription; LLM agents; and  | `/home/phyton/.gemini/antigravity/skills/voice-ai-engine-development` |
| **vulnerability-scanner** | "Advanced vulnerability analysis principles. OWASP 2025; Supply Chain Security; attack surface mapping; risk prioritizat | `/home/phyton/.gemini/antigravity/skills/vulnerability-scanner` |
| **wcag-audit-patterns** | "Conduct WCAG 2.2 accessibility audits with automated testing; manual verification; and remediation guidance. Use when a | `/home/phyton/.gemini/antigravity/skills/wcag-audit-patterns` |
| **web3-testing** | "Test smart contracts comprehensively using Hardhat and Foundry with unit tests; integration tests; and mainnet forking. | `/home/phyton/.gemini/antigravity/skills/web3-testing` |
| **webapp-testing** | "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functiona | `/home/phyton/.gemini/antigravity/skills/webapp-testing` |
| **web-artifacts-builder** | "Suite of tools for creating elaborate; multi-component claude.ai HTML artifacts using modern frontend web technologies  | `/home/phyton/.gemini/antigravity/skills/web-artifacts-builder` |
| **web-design-guidelines** | "Review UI code for Web Interface Guidelines compliance. Use when asked to \\\"review my UI\\\"; \\\"check accessibility | `/home/phyton/.gemini/antigravity/skills/web-design-guidelines` |
| **webflow-automation** | "Automate Webflow CMS collections; site publishing; page management; asset uploads; and ecommerce orders via Rube MCP (C | `/home/phyton/.gemini/antigravity/skills/webflow-automation` |
| **web-performance-optimization** | "Optimize website and web application performance including loading speed; Core Web Vitals; bundle size; caching strateg | `/home/phyton/.gemini/antigravity/skills/web-performance-optimization` |
| **web-security-testing** | "Web application security testing workflow for OWASP Top 10 vulnerabilities including injection; XSS; authentication fla | `/home/phyton/.gemini/antigravity/skills/web-security-testing` |
| **whatsapp-automation** | "Automate WhatsApp Business tasks via Rube MCP (Composio): send messages; manage templates; upload media; and handle con | `/home/phyton/.gemini/antigravity/skills/whatsapp-automation` |
| **wiki-architect** | "Analyzes code repositories and generates hierarchical documentation structures with onboarding guides. Use when the use | `/home/phyton/.gemini/antigravity/skills/wiki-architect` |
| **wiki-changelog** | "Analyzes git commit history and generates structured changelogs categorized by change type. Use when the user asks abou | `/home/phyton/.gemini/antigravity/skills/wiki-changelog` |
| **wiki-onboarding** | "Generates two complementary onboarding guides \u2014 a Principal-Level architectural deep-dive and a Zero-to-Hero contr | `/home/phyton/.gemini/antigravity/skills/wiki-onboarding` |
| **wiki-page-writer** | "Generates rich technical documentation pages with dark-mode Mermaid diagrams; source code citations; and first-principl | `/home/phyton/.gemini/antigravity/skills/wiki-page-writer` |
| **wiki-qa** | "Answers questions about a code repository using source file analysis. Use when the user asks a question about how somet | `/home/phyton/.gemini/antigravity/skills/wiki-qa` |
| **wiki-researcher** | "Conducts multi-turn iterative deep research on specific topics within a codebase with zero tolerance for shallow analys | `/home/phyton/.gemini/antigravity/skills/wiki-researcher` |
| **wiki-vitepress** | "Packages generated wiki Markdown into a VitePress static site with dark theme; dark-mode Mermaid diagrams with click-to | `/home/phyton/.gemini/antigravity/skills/wiki-vitepress` |
| **windows-privilege-escalation** | "This skill should be used when the user asks to \"escalate privileges on Windows;\" \"find Windows privesc vectors;\" \ | `/home/phyton/.gemini/antigravity/skills/windows-privilege-escalation` |
| **wireshark-analysis** | "This skill should be used when the user asks to \"analyze network traffic with Wireshark\"; \"capture packets for troub | `/home/phyton/.gemini/antigravity/skills/wireshark-analysis` |
| **wordpress-penetration-testing** | "This skill should be used when the user asks to \"pentest WordPress sites\"; \"scan WordPress for vulnerabilities\"; \" | `/home/phyton/.gemini/antigravity/skills/wordpress-penetration-testing` |
| **wordpress-plugin-development** | "WordPress plugin development workflow covering plugin architecture; hooks; admin interfaces; REST API; and security bes | `/home/phyton/.gemini/antigravity/skills/wordpress-plugin-development` |
| **wordpress** | "Complete WordPress development workflow covering theme development; plugin creation; WooCommerce integration; performan | `/home/phyton/.gemini/antigravity/skills/wordpress` |
| **wordpress-theme-development** | "WordPress theme development workflow covering theme architecture; template hierarchy; custom post types; block editor s | `/home/phyton/.gemini/antigravity/skills/wordpress-theme-development` |
| **wordpress-woocommerce-development** | "WooCommerce store development workflow covering store setup; payment integration; shipping configuration; and customiza | `/home/phyton/.gemini/antigravity/skills/wordpress-woocommerce-development` |
| **workflow-automation** | "Workflow automation is the infrastructure that makes AI agents reliable. Without durable execution; a network hiccup du | `/home/phyton/.gemini/antigravity/skills/workflow-automation` |
| **workflow-orchestration-patterns** | "Design durable workflows with Temporal for distributed systems. Covers workflow vs activity separation; saga patterns;  | `/home/phyton/.gemini/antigravity/skills/workflow-orchestration-patterns` |
| **workflow-patterns** | Use this skill when implementing tasks according to Conductor's TDD workflow; handling phase checkpoints; managing git c | `/home/phyton/.gemini/antigravity/skills/workflow-patterns` |
| **wrike-automation** | "Automate Wrike project management via Rube MCP (Composio): create tasks/folders; manage projects; assign work; and trac | `/home/phyton/.gemini/antigravity/skills/wrike-automation` |
| **writing-plans** | "Use when you have a spec or requirements for a multi-step task; before touching code" | `/home/phyton/.gemini/antigravity/skills/writing-plans` |
| **writing-skills** | "Use when creating; updating; or improving agent skills." | `/home/phyton/.gemini/antigravity/skills/writing-skills` |
| **x-article-publisher-skill** | "Publish articles to X/Twitter" | `/home/phyton/.gemini/antigravity/skills/x-article-publisher-skill` |
| **xlsx-official** | "Comprehensive spreadsheet creation; editing; and analysis with support for formulas; formatting; data analysis; and vis | `/home/phyton/.gemini/antigravity/skills/xlsx-official` |
| **xlsx-official** | "Comprehensive spreadsheet creation; editing; and analysis with support for formulas; formatting; data analysis; and vis | `/home/phyton/.gemini/antigravity/skills/xlsx` |
| **xss-html-injection** | "This skill should be used when the user asks to \"test for XSS vulnerabilities\"; \"perform cross-site scripting attack | `/home/phyton/.gemini/antigravity/skills/xss-html-injection` |
| **x-twitter-scraper** | "X (Twitter) data platform skill — tweet search; user lookup; follower extraction; engagement metrics; giveaway draws; | `/home/phyton/.gemini/antigravity/skills/x-twitter-scraper` |
| **youtube-automation** | "Automate YouTube tasks via Rube MCP (Composio): upload videos; manage playlists; search content; get analytics; and han | `/home/phyton/.gemini/antigravity/skills/youtube-automation` |
| **youtube-summarizer** | "Extract transcripts from YouTube videos and generate comprehensive; detailed summaries using intelligent analysis frame | `/home/phyton/.gemini/antigravity/skills/youtube-summarizer` |
| **zapier-make-patterns** | "No-code automation democratizes workflow building. Zapier and Make (formerly Integromat) let non-developers automate bu | `/home/phyton/.gemini/antigravity/skills/zapier-make-patterns` |
| **zendesk-automation** | "Automate Zendesk tasks via Rube MCP (Composio): tickets; users; organizations; replies. Always search tools first for c | `/home/phyton/.gemini/antigravity/skills/zendesk-automation` |
| **zoho-crm-automation** | "Automate Zoho CRM tasks via Rube MCP (Composio): create/update records; search contacts; manage leads; and convert lead | `/home/phyton/.gemini/antigravity/skills/zoho-crm-automation` |
| **zoom-automation** | "Automate Zoom meeting creation; management; recordings; webinars; and participant tracking via Rube MCP (Composio). Alw | `/home/phyton/.gemini/antigravity/skills/zoom-automation` |
| **zustand-store-ts** | "Create Zustand stores with TypeScript; subscribeWithSelector middleware; and proper state/action separation. Use when b | `/home/phyton/.gemini/antigravity/skills/zustand-store-ts` |
| **sdd-apply** | > | `/home/phyton/.gemini/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.gemini/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.gemini/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.gemini/skills/sdd-explore` |
| **sdd-init** | > | `/home/phyton/.gemini/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.gemini/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.gemini/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.gemini/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.gemini/skills/sdd-verify` |
| **sdd-apply** | > | `/home/phyton/SIEstBackend/.agent/skills/sdd-apply` |
| **sdd-verify** | > | `/home/phyton/SIEstBackend/.agent/skills/sdd-verify` |

### 🧪 Testing & QA

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **bruno-api-tester** | "Experto en diseño; generación y validación de colecciones de Bruno API Client (.bru) para pruebas automatizadas de A | `/home/phyton/.agent/skills/bruno-api-tester` |
| **go-testing** | > | `/home/phyton/.claude/skills/go-testing` |
| **engram-testing-coverage** | > | `/home/phyton/clawd/skills/atl/testing-coverage` |
| **go-testing** | > | `/home/phyton/.config/opencode/skills/go-testing` |
| **go-testing** | > | `/home/phyton/.copilot/skills/go-testing` |
| **go-testing** | > | `/home/phyton/.cursor/skills/go-testing` |
| **ab-test-setup** | "Structured guide for setting up A/B tests with mandatory gates for hypothesis; metrics; and execution readiness." | `/home/phyton/.gemini/antigravity/skills/ab-test-setup` |
| **agent-evaluation** | "Testing and benchmarking LLM agents including behavioral testing; capability assessment; reliability metrics; and produ | `/home/phyton/.gemini/antigravity/skills/agent-evaluation` |
| **agentmail** | Email infrastructure for AI agents. Create accounts; send/receive emails; manage webhooks; and check karma balance via t | `/home/phyton/.gemini/antigravity/skills/agentmail` |
| **airflow-dag-patterns** | "Build production Apache Airflow DAGs with best practices for operators; sensors; testing; and deployment. Use when crea | `/home/phyton/.gemini/antigravity/skills/airflow-dag-patterns` |
| **api-fuzzing-bug-bounty** | "This skill should be used when the user asks to \"test API security\"; \"fuzz APIs\"; \"find IDOR vulnerabilities\"; \" | `/home/phyton/.gemini/antigravity/skills/api-fuzzing-bug-bounty` |
| **apify-market-research** | Analyze market conditions; geographic opportunities; pricing; consumer behavior; and product validation across Google Ma | `/home/phyton/.gemini/antigravity/skills/apify-market-research` |
| **api-security-testing** | "API security testing workflow for REST and GraphQL APIs covering authentication; authorization; rate limiting; input va | `/home/phyton/.gemini/antigravity/skills/api-security-testing` |
| **api-testing-observability-api-mock** | "You are an API mocking expert specializing in realistic mock services for development; testing; and demos. Design mocks | `/home/phyton/.gemini/antigravity/skills/api-testing-observability-api-mock` |
| **audio-transcriber** | "Transform audio recordings into professional Markdown documentation with intelligent summaries using LLM integration" | `/home/phyton/.gemini/antigravity/skills/audio-transcriber` |
| **autonomous-agent-patterns** | "Design patterns for building autonomous coding agents. Covers tool integration; permission systems; browser automation; | `/home/phyton/.gemini/antigravity/skills/autonomous-agent-patterns` |
| **aws-penetration-testing** | "This skill should be used when the user asks to \"pentest AWS\"; \"test AWS security\"; \"enumerate IAM\"; \"exploit cl | `/home/phyton/.gemini/antigravity/skills/aws-penetration-testing` |
| **azure-microsoft-playwright-testing-ts** | "Run Playwright tests at scale using Azure Playwright Workspaces (formerly Microsoft Playwright Testing). Use when scali | `/home/phyton/.gemini/antigravity/skills/azure-microsoft-playwright-testing-ts` |
| **azure-resource-manager-playwright-dotnet** | Azure Resource Manager SDK for Microsoft Playwright Testing in .NET. | `/home/phyton/.gemini/antigravity/skills/azure-resource-manager-playwright-dotnet` |
| **backtesting-frameworks** | "Build robust backtesting systems for trading strategies with proper handling of look-ahead bias; survivorship bias; and | `/home/phyton/.gemini/antigravity/skills/backtesting-frameworks` |
| **bash-scripting** | "Bash scripting workflow for creating production-ready shell scripts with defensive patterns; error handling; and testin | `/home/phyton/.gemini/antigravity/skills/bash-scripting` |
| **bats-testing-patterns** | "Master Bash Automated Testing System (Bats) for comprehensive shell script testing. Use when writing tests for shell sc | `/home/phyton/.gemini/antigravity/skills/bats-testing-patterns` |
| **brand-guidelines-community** | "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic | `/home/phyton/.gemini/antigravity/skills/brand-guidelines-community` |
| **broken-authentication** | "This skill should be used when the user asks to \"test for broken authentication vulnerabilities\"; \"assess session ma | `/home/phyton/.gemini/antigravity/skills/broken-authentication` |
| **browser-automation** | "Browser automation powers web testing; scraping; and AI agent interactions. The difference between a flaky script and a | `/home/phyton/.gemini/antigravity/skills/browser-automation` |
| **burp-suite-testing** | "This skill should be used when the user asks to \"intercept HTTP traffic\"; \"modify web requests\"; \"use Burp Suite f | `/home/phyton/.gemini/antigravity/skills/burp-suite-testing` |
| **circleci-automation** | "Automate CircleCI tasks via Rube MCP (Composio): trigger pipelines; monitor workflows/jobs; retrieve artifacts and test | `/home/phyton/.gemini/antigravity/skills/circleci-automation` |
| **cloud-penetration-testing** | "This skill should be used when the user asks to \"perform cloud penetration testing\"; \"assess Azure or AWS or GCP sec | `/home/phyton/.gemini/antigravity/skills/cloud-penetration-testing` |
| **conductor-implement** | "Execute tasks from a track's implementation plan following TDD workflow" | `/home/phyton/.gemini/antigravity/skills/conductor-implement` |
| **conductor-revert** | "Git-aware undo by logical work unit (track; phase; or task)" | `/home/phyton/.gemini/antigravity/skills/conductor-revert` |
| **context7-auto-research** | "Automatically fetch latest library/framework documentation for Claude Code via Context7 API" | `/home/phyton/.gemini/antigravity/skills/context7-auto-research` |
| **copilot-sdk** | "Build applications powered by GitHub Copilot using the Copilot SDK. Use when creating programmatic integrations with Co | `/home/phyton/.gemini/antigravity/skills/copilot-sdk` |
| **data-engineering-data-driven-feature** | "Build features guided by data insights; A/B testing; and continuous measurement using specialized agents for analysis;  | `/home/phyton/.gemini/antigravity/skills/data-engineering-data-driven-feature` |
| **data-quality-frameworks** | "Implement data quality validation with Great Expectations; dbt tests; and data contracts. Use when building data qualit | `/home/phyton/.gemini/antigravity/skills/data-quality-frameworks` |
| **dbt-transformation-patterns** | "Master dbt (data build tool) for analytics engineering with model organization; testing; documentation; and incremental | `/home/phyton/.gemini/antigravity/skills/dbt-transformation-patterns` |
| **ddd-context-mapping** | "Map relationships between bounded contexts and define integration contracts using DDD context mapping patterns." | `/home/phyton/.gemini/antigravity/skills/ddd-context-mapping` |
| **debugger** | 'Debugging specialist for errors; test failures; and unexpected | `/home/phyton/.gemini/antigravity/skills/debugger` |
| **dependency-upgrade** | "Manage major dependency version upgrades with compatibility analysis; staged rollout; and comprehensive testing. Use wh | `/home/phyton/.gemini/antigravity/skills/dependency-upgrade` |
| **deployment-validation-config-validate** | "You are a configuration management expert specializing in validating; testing; and ensuring the correctness of applicat | `/home/phyton/.gemini/antigravity/skills/deployment-validation-config-validate` |
| **e2e-testing-patterns** | "Master end-to-end testing with Playwright and Cypress to build reliable test suites that catch bugs; improve confidence | `/home/phyton/.gemini/antigravity/skills/e2e-testing-patterns` |

### 📝 Documentation & Writing

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **sdd-design** | > | `/home/phyton/.claude/skills/sdd-design` |
| **sdd-spec** | > | `/home/phyton/.claude/skills/sdd-spec` |
| **skill-creator** | > | `/home/phyton/.claude/skills/skill-creator` |
| **engram-docs-alignment** | > | `/home/phyton/clawd/skills/atl/docs-alignment` |
| **sdd-design** | > | `/home/phyton/clawd/skills/atl/sdd-design` |
| **sdd-spec** | > | `/home/phyton/clawd/skills/atl/sdd-spec` |
| **sdd-design** | > | `/home/phyton/.config/opencode/skills/sdd-design` |
| **sdd-spec** | > | `/home/phyton/.config/opencode/skills/sdd-spec` |
| **skill-creator** | > | `/home/phyton/.config/opencode/skills/skill-creator` |
| **sdd-design** | > | `/home/phyton/.copilot/skills/sdd-design` |
| **sdd-spec** | > | `/home/phyton/.copilot/skills/sdd-spec` |
| **skill-creator** | > | `/home/phyton/.copilot/skills/skill-creator` |
| **sdd-design** | > | `/home/phyton/.cursor/skills/sdd-design` |
| **sdd-spec** | > | `/home/phyton/.cursor/skills/sdd-spec` |
| **skill-creator** | > | `/home/phyton/.cursor/skills/skill-creator` |
| **api-documentation-generator** | "Generate comprehensive; developer-friendly API documentation from code; including endpoints; parameters; examples; and  | `/home/phyton/.gemini/antigravity/skills/api-documentation-generator` |
| **api-documentation** | "API documentation workflow for generating OpenAPI specs; creating developer guides; and maintaining comprehensive API d | `/home/phyton/.gemini/antigravity/skills/api-documentation` |
| **api-documenter** | Master API documentation with OpenAPI 3.1; AI-powered tools; and modern developer experience practices. Create interacti | `/home/phyton/.gemini/antigravity/skills/api-documenter` |
| **apify-competitor-intelligence** | Analyze competitor strategies; content; pricing; ads; and market positioning across Google Maps; Booking.com; Facebook;  | `/home/phyton/.gemini/antigravity/skills/apify-competitor-intelligence` |
| **apify-content-analytics** | Track engagement metrics; measure campaign ROI; and analyze content performance across Instagram; Facebook; YouTube; and | `/home/phyton/.gemini/antigravity/skills/apify-content-analytics` |
| **apify-trend-analysis** | Discover and track emerging trends across Google Trends; Instagram; Facebook; YouTube; and TikTok to inform content stra | `/home/phyton/.gemini/antigravity/skills/apify-trend-analysis` |
| **architecture-decision-records** | "Write and maintain Architecture Decision Records (ADRs) following best practices for technical decision documentation.  | `/home/phyton/.gemini/antigravity/skills/architecture-decision-records` |
| **architecture** | "Architectural decision-making framework. Requirements analysis; trade-off evaluation; ADR documentation. Use when makin | `/home/phyton/.gemini/antigravity/skills/architecture` |
| **audio-transcriber** | "Transform audio recordings into professional Markdown documentation with intelligent summaries using LLM integration" | `/home/phyton/.gemini/antigravity/skills/audio-transcriber` |
| **azure-ai-contentsafety-java** | "Build content moderation applications with Azure AI Content Safety SDK for Java. Use when implementing text/image analy | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-java` |
| **azure-ai-contentsafety-py** | Azure AI Content Safety SDK for Python. Use for detecting harmful content in text and images with multi-severity classif | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-py` |
| **azure-ai-contentsafety-ts** | "Analyze text and images for harmful content using Azure AI Content Safety (@azure-rest/ai-content-safety). Use when mod | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentsafety-ts` |
| **azure-ai-contentunderstanding-py** | Azure AI Content Understanding SDK for Python. Use for multimodal content extraction from documents; images; audio; and  | `/home/phyton/.gemini/antigravity/skills/azure-ai-contentunderstanding-py` |
| **azure-ai-document-intelligence-dotnet** | Azure AI Document Intelligence SDK for .NET. Extract text; tables; and structured data from documents using prebuilt and | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-dotnet` |
| **azure-ai-document-intelligence-ts** | "Extract text; tables; and structured data from documents using Azure Document Intelligence (@azure-rest/ai-document-int | `/home/phyton/.gemini/antigravity/skills/azure-ai-document-intelligence-ts` |
| **azure-ai-formrecognizer-java** | "Build document analysis applications with Azure Document Intelligence (Form Recognizer) SDK for Java. Use when extracti | `/home/phyton/.gemini/antigravity/skills/azure-ai-formrecognizer-java` |
| **azure-ai-translation-document-py** | Azure AI Document Translation SDK for batch translation of documents with format preservation. Use for translating Word; | `/home/phyton/.gemini/antigravity/skills/azure-ai-translation-document-py` |
| **azure-cosmos-py** | Azure Cosmos DB SDK for Python (NoSQL API). Use for document CRUD; queries; containers; and globally distributed data. | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-py` |
| **azure-cosmos-rust** | Azure Cosmos DB SDK for Rust (NoSQL API). Use for document CRUD; queries; containers; and globally distributed data. | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-rust` |
| **azure-cosmos-ts** | Azure Cosmos DB JavaScript/TypeScript SDK (@azure/cosmos) for data plane operations. Use for CRUD operations on document | `/home/phyton/.gemini/antigravity/skills/azure-cosmos-ts` |
| **azure-search-documents-dotnet** | Azure AI Search SDK for .NET (Azure.Search.Documents). Use for building search applications with full-text; vector; sema | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-dotnet` |
| **azure-search-documents-py** | Azure AI Search SDK for Python. Use for vector search; hybrid search; semantic ranking; indexing; and skillsets. | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-py` |
| **azure-search-documents-ts** | "Build search applications using Azure AI Search SDK for JavaScript (@azure/search-documents). Use when creating/managin | `/home/phyton/.gemini/antigravity/skills/azure-search-documents-ts` |
| **c4-architecture-c4-architecture** | "Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis app | `/home/phyton/.gemini/antigravity/skills/c4-architecture-c4-architecture` |
| **c4-code** | Expert C4 Code-level documentation specialist. Analyzes code directories to create comprehensive C4 code-level documenta | `/home/phyton/.gemini/antigravity/skills/c4-code` |

### 💼 Business & Marketing

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **sdd-apply** | > | `/home/phyton/.claude/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.claude/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.claude/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.claude/skills/sdd-explore` |
| **sdd-propose** | > | `/home/phyton/.claude/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.claude/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.claude/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.claude/skills/sdd-verify` |
| **engram-branch-pr** | > | `/home/phyton/clawd/skills/atl/branch-pr` |
| **engram-business-rules** | > | `/home/phyton/clawd/skills/atl/business-rules` |
| **sdd-apply** | > | `/home/phyton/clawd/skills/atl/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/clawd/skills/atl/sdd-archive` |
| **sdd-design** | > | `/home/phyton/clawd/skills/atl/sdd-design` |
| **sdd-explore** | > | `/home/phyton/clawd/skills/atl/sdd-explore` |
| **sdd-propose** | > | `/home/phyton/clawd/skills/atl/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/clawd/skills/atl/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/clawd/skills/atl/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/clawd/skills/atl/sdd-verify` |
| **engram-tui-quality** | > | `/home/phyton/clawd/skills/atl/tui-quality` |
| **sdd-apply** | > | `/home/phyton/.config/opencode/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.config/opencode/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.config/opencode/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.config/opencode/skills/sdd-explore` |
| **sdd-propose** | > | `/home/phyton/.config/opencode/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.config/opencode/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.config/opencode/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.config/opencode/skills/sdd-verify` |
| **sdd-apply** | > | `/home/phyton/.copilot/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.copilot/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.copilot/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.copilot/skills/sdd-explore` |
| **sdd-propose** | > | `/home/phyton/.copilot/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.copilot/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.copilot/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.copilot/skills/sdd-verify` |
| **sdd-apply** | > | `/home/phyton/.cursor/skills/sdd-apply` |
| **sdd-archive** | > | `/home/phyton/.cursor/skills/sdd-archive` |
| **sdd-design** | > | `/home/phyton/.cursor/skills/sdd-design` |
| **sdd-explore** | > | `/home/phyton/.cursor/skills/sdd-explore` |
| **sdd-propose** | > | `/home/phyton/.cursor/skills/sdd-propose` |
| **sdd-spec** | > | `/home/phyton/.cursor/skills/sdd-spec` |
| **sdd-tasks** | > | `/home/phyton/.cursor/skills/sdd-tasks` |
| **sdd-verify** | > | `/home/phyton/.cursor/skills/sdd-verify` |
| **3d-web-experience** | "Expert in building 3D experiences for the web - Three.js; React Three Fiber; Spline; WebGL; and interactive 3D scenes.  | `/home/phyton/.gemini/antigravity/skills/3d-web-experience` |
| **accessibility-compliance-accessibility-audit** | "You are an accessibility expert specializing in WCAG compliance; inclusive design; and assistive technology compatibili | `/home/phyton/.gemini/antigravity/skills/accessibility-compliance-accessibility-audit` |
| **agent-framework-azure-ai-py** | "Build Azure AI Foundry agents using the Microsoft Agent Framework Python SDK (agent-framework-azure-ai). Use when creat | `/home/phyton/.gemini/antigravity/skills/agent-framework-azure-ai-py` |
| **agent-manager-skill** | "Manage multiple local CLI agents via tmux sessions (start/stop/monitor/assign) with cron-friendly scheduling." | `/home/phyton/.gemini/antigravity/skills/agent-manager-skill` |
| **agent-orchestration-improve-agent** | "Systematic improvement of existing agents through performance analysis; prompt engineering; and continuous iteration." | `/home/phyton/.gemini/antigravity/skills/agent-orchestration-improve-agent` |
| **ai-wrapper-product** | "Expert in building products that wrap AI APIs (OpenAI; Anthropic; etc.) into focused tools people will pay for. Not jus | `/home/phyton/.gemini/antigravity/skills/ai-wrapper-product` |
| **analytics-tracking** | Design; audit; and improve analytics tracking systems that produce reliable; decision-ready data. | `/home/phyton/.gemini/antigravity/skills/analytics-tracking` |

### 🎮 Game Development

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **brand-guidelines-community** | "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic | `/home/phyton/.gemini/antigravity/skills/brand-guidelines-community` |
| **2d-games** | "2D game development principles. Sprites; tilemaps; physics; camera." | `/home/phyton/.gemini/antigravity/skills/game-development/2d-games` |
| **3d-games** | "3D game development principles. Rendering; shaders; physics; cameras." | `/home/phyton/.gemini/antigravity/skills/game-development/3d-games` |
| **game-art** | "Game art principles. Visual style selection; asset pipeline; animation workflow." | `/home/phyton/.gemini/antigravity/skills/game-development/game-art` |
| **game-audio** | "Game audio principles. Sound design; music integration; adaptive audio systems." | `/home/phyton/.gemini/antigravity/skills/game-development/game-audio` |
| **game-design** | "Game design principles. GDD structure; balancing; player psychology; progression." | `/home/phyton/.gemini/antigravity/skills/game-development/game-design` |
| **mobile-games** | "Mobile game development principles. Touch input; battery; performance; app stores." | `/home/phyton/.gemini/antigravity/skills/game-development/mobile-games` |
| **multiplayer** | "Multiplayer game development principles. Architecture; networking; synchronization." | `/home/phyton/.gemini/antigravity/skills/game-development/multiplayer` |
| **pc-games** | "PC and console game development principles. Engine selection; platform features; optimization strategies." | `/home/phyton/.gemini/antigravity/skills/game-development/pc-games` |
| **game-development** | "Game development orchestrator. Routes to platform-specific skills based on project needs." | `/home/phyton/.gemini/antigravity/skills/game-development` |
| **vr-ar** | "VR/AR development principles. Comfort; interaction; performance requirements." | `/home/phyton/.gemini/antigravity/skills/game-development/vr-ar` |
| **web-games** | "Web browser game development principles. Framework selection; WebGPU; optimization; PWA." | `/home/phyton/.gemini/antigravity/skills/game-development/web-games` |
| **godot-4-migration** | "Specialized guide for migrating Godot 3.x projects to Godot 4 (GDScript 2.0); covering syntax changes; Tweens; and expo | `/home/phyton/.gemini/antigravity/skills/godot-4-migration` |
| **godot-gdscript-patterns** | "Master Godot 4 GDScript patterns including signals; scenes; state machines; and optimization. Use when building Godot g | `/home/phyton/.gemini/antigravity/skills/godot-gdscript-patterns` |
| **hig-inputs** | 'Apple HIG guidance for input methods and interaction patterns: gestures; Apple Pencil; keyboards; game controllers; poi | `/home/phyton/.gemini/antigravity/skills/hig-inputs` |
| **internal-comms-community** | "A set of resources to help me write all kinds of internal communications; using the formats that my company likes to us | `/home/phyton/.gemini/antigravity/skills/internal-comms-community` |
| **makepad-skills** | "Makepad UI development skills for Rust apps: setup; patterns; shaders; packaging; and troubleshooting." | `/home/phyton/.gemini/antigravity/skills/makepad-skills` |
| **minecraft-bukkit-pro** | Master Minecraft server plugin development with Bukkit; Spigot; and Paper APIs. | `/home/phyton/.gemini/antigravity/skills/minecraft-bukkit-pro` |
| **openapi-spec-generation** | "Generate and maintain OpenAPI 3.1 specifications from code; design-first specs; and validation patterns. Use when creat | `/home/phyton/.gemini/antigravity/skills/openapi-spec-generation` |
| **shader-programming-glsl** | "Expert guide for writing efficient GLSL shaders (Vertex/Fragment) for web and game engines; covering syntax; uniforms;  | `/home/phyton/.gemini/antigravity/skills/shader-programming-glsl` |
| **startup-business-analyst-market-opportunity** | 'Generate comprehensive market opportunity analysis with TAM/SAM/SOM | `/home/phyton/.gemini/antigravity/skills/startup-business-analyst-market-opportunity` |
| **unity-developer** | Build Unity games with optimized C# scripts; efficient rendering; and proper asset management. Masters Unity 6 LTS; URP/ | `/home/phyton/.gemini/antigravity/skills/unity-developer` |
| **unity-ecs-patterns** | "Master Unity ECS (Entity Component System) with DOTS; Jobs; and Burst for high-performance game development. Use when b | `/home/phyton/.gemini/antigravity/skills/unity-ecs-patterns` |
| **unreal-engine-cpp-pro** | "Expert guide for Unreal Engine 5.x C++ development; covering UObject hygiene; performance patterns; and best practices. | `/home/phyton/.gemini/antigravity/skills/unreal-engine-cpp-pro` |

### 🔧 Git & Workflow

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **bruno-api-tester** | "Experto en diseño; generación y validación de colecciones de Bruno API Client (.bru) para pruebas automatizadas de A | `/home/phyton/.agent/skills/bruno-api-tester` |
| **siest-backend-core** | "Reglas arquitectónicas y de desarrollo para el proyecto SIEstBackend (PHP 8+; Flight Framework; Dual DB)." | `/home/phyton/.agent/skills/siest-backend-core` |
| **sdd-init** | > | `/home/phyton/.claude/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.claude/skills/sdd-propose` |
| **engram-branch-pr** | > | `/home/phyton/clawd/skills/atl/branch-pr` |
| **engram-business-rules** | > | `/home/phyton/clawd/skills/atl/business-rules` |
| **engram-commit-hygiene** | > | `/home/phyton/clawd/skills/atl/commit-hygiene` |
| **engram-cultural-norms** | > | `/home/phyton/clawd/skills/atl/cultural-norms` |
| **engram-docs-alignment** | > | `/home/phyton/clawd/skills/atl/docs-alignment` |
| **engram-memory-protocol** | > | `/home/phyton/clawd/skills/atl/memory-protocol` |
| **engram-project-structure** | > | `/home/phyton/clawd/skills/atl/project-structure` |
| **engram-pr-review-deep** | > | `/home/phyton/clawd/skills/atl/pr-review-deep` |
| **engram-sdd-flow** | > | `/home/phyton/clawd/skills/atl/sdd-flow` |
| **sdd-init** | > | `/home/phyton/clawd/skills/atl/sdd-init` |
| **sdd-propose** | > | `/home/phyton/clawd/skills/atl/sdd-propose` |
| **php-phinx** | > | `/home/phyton/.config/opencode/skills/php-phinx` |
| **sdd-init** | > | `/home/phyton/.config/opencode/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.config/opencode/skills/sdd-propose` |
| **sdd-init** | > | `/home/phyton/.copilot/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.copilot/skills/sdd-propose` |
| **sdd-init** | > | `/home/phyton/.cursor/skills/sdd-init` |
| **sdd-propose** | > | `/home/phyton/.cursor/skills/sdd-propose` |
| **00-andruia-consultant** | "Arquitecto de Soluciones Principal y Consultor Tecnológico de Andru.ia. Diagnostica y traza la hoja de ruta óptima pa | `/home/phyton/.gemini/antigravity/skills/00-andruia-consultant` |
| **20-andruia-niche-intelligence** | "Estratega de Inteligencia de Dominio de Andru.ia. Analiza el nicho específico de un proyecto para inyectar conocimient | `/home/phyton/.gemini/antigravity/skills/20-andruia-niche-intelligence` |
| **address-github-comments** | "Use when you need to address review or issue comments on an open GitHub Pull Request using the gh CLI." | `/home/phyton/.gemini/antigravity/skills/address-github-comments` |
| **agent-evaluation** | "Testing and benchmarking LLM agents including behavioral testing; capability assessment; reliability metrics; and produ | `/home/phyton/.gemini/antigravity/skills/agent-evaluation` |
| **agent-memory-mcp** | "A hybrid memory system that provides persistent; searchable knowledge management for AI agents (Architecture; Patterns; | `/home/phyton/.gemini/antigravity/skills/agent-memory-mcp` |
| **agent-memory-systems** | "Memory is the cornerstone of intelligent agents. Without it; every interaction starts from zero. This skill covers the  | `/home/phyton/.gemini/antigravity/skills/agent-memory-systems` |
| **agent-orchestration-improve-agent** | "Systematic improvement of existing agents through performance analysis; prompt engineering; and continuous iteration." | `/home/phyton/.gemini/antigravity/skills/agent-orchestration-improve-agent` |
| **agent-orchestration-multi-agent-optimize** | "Optimize multi-agent systems with coordinated profiling; workload distribution; and cost-aware orchestration. Use when  | `/home/phyton/.gemini/antigravity/skills/agent-orchestration-multi-agent-optimize` |
| **agents-v2-py** | "Build container-based Foundry Agents with Azure AI Projects SDK (ImageBasedHostedAgentDefinition). Use when creating ho | `/home/phyton/.gemini/antigravity/skills/agents-v2-py` |
| **ai-agent-development** | "AI agent development workflow for building autonomous agents; multi-agent systems; and agent orchestration with CrewAI; | `/home/phyton/.gemini/antigravity/skills/ai-agent-development` |
| **ai-agents-architect** | "Expert in designing and building autonomous AI agents. Masters tool use; memory systems; planning strategies; and multi | `/home/phyton/.gemini/antigravity/skills/ai-agents-architect` |
| **ai-engineer** | Build production-ready LLM applications; advanced RAG systems; and intelligent agents. Implements vector search; multimo | `/home/phyton/.gemini/antigravity/skills/ai-engineer` |
| **ai-ml** | "AI and machine learning workflow covering LLM application development; RAG implementation; agent architecture; ML pipel | `/home/phyton/.gemini/antigravity/skills/ai-ml` |
| **ai-product** | Every product will be AI-powered. The question is whether you'll build it right or ship a demo that falls apart in produ | `/home/phyton/.gemini/antigravity/skills/ai-product` |
| **airflow-dag-patterns** | "Build production Apache Airflow DAGs with best practices for operators; sensors; testing; and deployment. Use when crea | `/home/phyton/.gemini/antigravity/skills/airflow-dag-patterns` |
| **ai-wrapper-product** | "Expert in building products that wrap AI APIs (OpenAI; Anthropic; etc.) into focused tools people will pay for. Not jus | `/home/phyton/.gemini/antigravity/skills/ai-wrapper-product` |
| **analytics-tracking** | Design; audit; and improve analytics tracking systems that produce reliable; decision-ready data. | `/home/phyton/.gemini/antigravity/skills/analytics-tracking` |
| **angular-best-practices** | "Angular performance optimization and best practices guide. Use when writing; reviewing; or refactoring Angular code for | `/home/phyton/.gemini/antigravity/skills/angular-best-practices` |
| **antigravity-workflows** | "Orchestrate multiple Antigravity skills through guided workflows for SaaS MVP delivery; security audits; AI agent build | `/home/phyton/.gemini/antigravity/skills/antigravity-workflows` |
| **anti-reversing-techniques** | "Understand anti-reversing; obfuscation; and protection techniques encountered during software analysis. Use when analyz | `/home/phyton/.gemini/antigravity/skills/anti-reversing-techniques` |
| **api-design-principles** | "Master REST and GraphQL API design principles to build intuitive; scalable; and maintainable APIs that delight develope | `/home/phyton/.gemini/antigravity/skills/api-design-principles` |
| **api-documentation-generator** | "Generate comprehensive; developer-friendly API documentation from code; including endpoints; parameters; examples; and  | `/home/phyton/.gemini/antigravity/skills/api-documentation-generator` |
| **api-documentation** | "API documentation workflow for generating OpenAPI specs; creating developer guides; and maintaining comprehensive API d | `/home/phyton/.gemini/antigravity/skills/api-documentation` |
| **api-documenter** | Master API documentation with OpenAPI 3.1; AI-powered tools; and modern developer experience practices. Create interacti | `/home/phyton/.gemini/antigravity/skills/api-documenter` |
| **apify-actor-development** | "Develop; debug; and deploy Apify Actors - serverless cloud programs for web scraping; automation; and data processing.  | `/home/phyton/.gemini/antigravity/skills/apify-actor-development` |
| **apify-actorization** | "Convert existing projects into Apify Actors - serverless cloud programs. Actorize JavaScript/TypeScript (SDK with Actor | `/home/phyton/.gemini/antigravity/skills/apify-actorization` |
| **apify-audience-analysis** | Understand audience demographics; preferences; behavior patterns; and engagement quality across Facebook; Instagram; You | `/home/phyton/.gemini/antigravity/skills/apify-audience-analysis` |
| **apify-brand-reputation-monitoring** | "Track reviews; ratings; sentiment; and brand mentions across Google Maps; Booking.com; TripAdvisor; Facebook; Instagram | `/home/phyton/.gemini/antigravity/skills/apify-brand-reputation-monitoring` |

### 📊 Data Engineering

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **airflow-dag-patterns** | "Build production Apache Airflow DAGs with best practices for operators; sensors; testing; and deployment. Use when crea | `/home/phyton/.gemini/antigravity/skills/airflow-dag-patterns` |
| **azure-ai-ml-py** | Azure Machine Learning SDK v2 for Python. Use for ML workspaces; jobs; models; datasets; compute; and pipelines. | `/home/phyton/.gemini/antigravity/skills/azure-ai-ml-py` |
| **cc-skill-clickhouse-io** | "ClickHouse database patterns; query optimization; analytics; and data engineering best practices for high-performance a | `/home/phyton/.gemini/antigravity/skills/cc-skill-clickhouse-io` |
| **database-admin** | Expert database administrator specializing in modern cloud databases; automation; and reliability engineering. | `/home/phyton/.gemini/antigravity/skills/database-admin` |
| **data-engineering-data-driven-feature** | "Build features guided by data insights; A/B testing; and continuous measurement using specialized agents for analysis;  | `/home/phyton/.gemini/antigravity/skills/data-engineering-data-driven-feature` |
| **data-engineering-data-pipeline** | "You are a data pipeline architecture expert specializing in scalable; reliable; and cost-effective data pipelines for b | `/home/phyton/.gemini/antigravity/skills/data-engineering-data-pipeline` |
| **data-engineer** | Build scalable data pipelines; modern data warehouses; and real-time streaming architectures. Implements Apache Spark; d | `/home/phyton/.gemini/antigravity/skills/data-engineer` |
| **data-quality-frameworks** | "Implement data quality validation with Great Expectations; dbt tests; and data contracts. Use when building data qualit | `/home/phyton/.gemini/antigravity/skills/data-quality-frameworks` |
| **data-scientist** | Expert data scientist for advanced analytics; machine learning; and statistical modeling. Handles complex data analysis; | `/home/phyton/.gemini/antigravity/skills/data-scientist` |
| **dbt-transformation-patterns** | "Master dbt (data build tool) for analytics engineering with model organization; testing; documentation; and incremental | `/home/phyton/.gemini/antigravity/skills/dbt-transformation-patterns` |
| **spark-optimization** | "Optimize Apache Spark jobs with partitioning; caching; shuffle optimization; and memory tuning. Use when improving Spar | `/home/phyton/.gemini/antigravity/skills/spark-optimization` |
| **vector-database-engineer** | "Expert in vector databases; embedding strategies; and semantic search implementation. Masters Pinecone; Weaviate; Qdran | `/home/phyton/.gemini/antigravity/skills/vector-database-engineer` |

### 🏗️ Architecture & Design Patterns

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **engram-architecture-guardrails** | > | `/home/phyton/clawd/skills/atl/architecture-guardrails` |
| **agent-memory-mcp** | "A hybrid memory system that provides persistent; searchable knowledge management for AI agents (Architecture; Patterns; | `/home/phyton/.gemini/antigravity/skills/agent-memory-mcp` |
| **ai-agents-architect** | "Expert in designing and building autonomous AI agents. Masters tool use; memory systems; planning strategies; and multi | `/home/phyton/.gemini/antigravity/skills/ai-agents-architect` |
| **ai-ml** | "AI and machine learning workflow covering LLM application development; RAG implementation; agent architecture; ML pipel | `/home/phyton/.gemini/antigravity/skills/ai-ml` |
| **api-security-best-practices** | "Implement secure API design patterns including authentication; authorization; input validation; rate limiting; and prot | `/home/phyton/.gemini/antigravity/skills/api-security-best-practices` |
| **architect-review** | "Master software architect specializing in modern architecture" | `/home/phyton/.gemini/antigravity/skills/architect-review` |
| **architecture-decision-records** | "Write and maintain Architecture Decision Records (ADRs) following best practices for technical decision documentation.  | `/home/phyton/.gemini/antigravity/skills/architecture-decision-records` |
| **architecture-patterns** | "Implement proven backend architecture patterns including Clean Architecture; Hexagonal Architecture; and Domain-Driven  | `/home/phyton/.gemini/antigravity/skills/architecture-patterns` |
| **architecture** | "Architectural decision-making framework. Requirements analysis; trade-off evaluation; ADR documentation. Use when makin | `/home/phyton/.gemini/antigravity/skills/architecture` |
| **autonomous-agent-patterns** | "Design patterns for building autonomous coding agents. Covers tool integration; permission systems; browser automation; | `/home/phyton/.gemini/antigravity/skills/autonomous-agent-patterns` |
| **aws-skills** | "AWS development with infrastructure automation and cloud architecture patterns" | `/home/phyton/.gemini/antigravity/skills/aws-skills` |
| **azure-eventgrid-py** | Azure Event Grid SDK for Python. Use for publishing events; handling CloudEvents; and event-driven architectures. | `/home/phyton/.gemini/antigravity/skills/azure-eventgrid-py` |
| **backend-architect** | Expert backend architect specializing in scalable API design; microservices architecture; and distributed systems. | `/home/phyton/.gemini/antigravity/skills/backend-architect` |
| **backend-dev-guidelines** | "Opinionated backend development standards for Node.js + Express + TypeScript microservices. Covers layered architecture | `/home/phyton/.gemini/antigravity/skills/backend-dev-guidelines` |
| **brainstorming** | "Use before creative or constructive work (features; architecture; behavior). Transforms vague ideas into validated desi | `/home/phyton/.gemini/antigravity/skills/brainstorming` |
| **c4-architecture-c4-architecture** | "Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis app | `/home/phyton/.gemini/antigravity/skills/c4-architecture-c4-architecture` |
| **c4-code** | Expert C4 Code-level documentation specialist. Analyzes code directories to create comprehensive C4 code-level documenta | `/home/phyton/.gemini/antigravity/skills/c4-code` |
| **c4-component** | Expert C4 Component-level documentation specialist. Synthesizes C4 Code-level documentation into Component-level archite | `/home/phyton/.gemini/antigravity/skills/c4-component` |
| **c4-container** | Expert C4 Container-level documentation specialist. | `/home/phyton/.gemini/antigravity/skills/c4-container` |
| **c4-context** | Expert C4 Context-level documentation specialist. Creates high-level system context diagrams; documents personas; user j | `/home/phyton/.gemini/antigravity/skills/c4-context` |
| **cc-skill-backend-patterns** | "Backend architecture patterns; API design; database optimization; and server-side best practices for Node.js; Express;  | `/home/phyton/.gemini/antigravity/skills/cc-skill-backend-patterns` |
| **cloud-architect** | Expert cloud architect specializing in AWS/Azure/GCP multi-cloud infrastructure design; advanced IaC (Terraform/OpenTofu | `/home/phyton/.gemini/antigravity/skills/cloud-architect` |
| **codebase-cleanup-refactor-clean** | "You are a code refactoring expert specializing in clean code principles; SOLID design patterns; and modern software eng | `/home/phyton/.gemini/antigravity/skills/codebase-cleanup-refactor-clean` |
| **code-refactoring-refactor-clean** | "You are a code refactoring expert specializing in clean code principles; SOLID design patterns; and modern software eng | `/home/phyton/.gemini/antigravity/skills/code-refactoring-refactor-clean` |
| **core-components** | "Core component library and design system patterns. Use when building UI; using design tokens; or working with the compo | `/home/phyton/.gemini/antigravity/skills/core-components` |
| **cqrs-implementation** | "Implement Command Query Responsibility Segregation for scalable architectures. Use when separating read and write model | `/home/phyton/.gemini/antigravity/skills/cqrs-implementation` |
| **database-architect** | Expert database architect specializing in data layer design from scratch; technology selection; schema modeling; and sca | `/home/phyton/.gemini/antigravity/skills/database-architect` |
| **database-optimizer** | Expert database optimizer specializing in modern performance tuning; query optimization; and scalable architectures. | `/home/phyton/.gemini/antigravity/skills/database-optimizer` |
| **data-engineering-data-pipeline** | "You are a data pipeline architecture expert specializing in scalable; reliable; and cost-effective data pipelines for b | `/home/phyton/.gemini/antigravity/skills/data-engineering-data-pipeline` |
| **data-engineer** | Build scalable data pipelines; modern data warehouses; and real-time streaming architectures. Implements Apache Spark; d | `/home/phyton/.gemini/antigravity/skills/data-engineer` |
| **ddd-context-mapping** | "Map relationships between bounded contexts and define integration contracts using DDD context mapping patterns." | `/home/phyton/.gemini/antigravity/skills/ddd-context-mapping` |
| **ddd-strategic-design** | "Design DDD strategic artifacts including subdomains; bounded contexts; and ubiquitous language for complex business dom | `/home/phyton/.gemini/antigravity/skills/ddd-strategic-design` |
| **ddd-tactical-patterns** | "Apply DDD tactical patterns in code using entities; value objects; aggregates; repositories; and domain events with exp | `/home/phyton/.gemini/antigravity/skills/ddd-tactical-patterns` |
| **discord-bot-architect** | "Specialized skill for building production-ready Discord bots. Covers Discord.js (JavaScript) and Pycord (Python); gatew | `/home/phyton/.gemini/antigravity/skills/discord-bot-architect` |
| **distributed-tracing** | "Implement distributed tracing with Jaeger and Tempo to track requests across microservices and identify performance bot | `/home/phyton/.gemini/antigravity/skills/distributed-tracing` |
| **docs-architect** | Creates comprehensive technical documentation from existing codebases. Analyzes architecture; design patterns; and imple | `/home/phyton/.gemini/antigravity/skills/docs-architect` |
| **documentation** | "Documentation generation workflow covering API docs; architecture docs; README files; code comments; and technical writ | `/home/phyton/.gemini/antigravity/skills/documentation` |
| **domain-driven-design** | "Plan and route Domain-Driven Design work from strategic modeling to tactical implementation and evented architecture pa | `/home/phyton/.gemini/antigravity/skills/domain-driven-design` |
| **dotnet-architect** | Expert .NET backend architect specializing in C#; ASP.NET Core; Entity Framework; Dapper; and enterprise application pat | `/home/phyton/.gemini/antigravity/skills/dotnet-architect` |
| **event-sourcing-architect** | "Expert in event sourcing; CQRS; and event-driven architecture patterns. Masters event store design; projection building | `/home/phyton/.gemini/antigravity/skills/event-sourcing-architect` |
| **event-store-design** | "Design and implement event stores for event-sourced systems. Use when building event sourcing infrastructure; choosing  | `/home/phyton/.gemini/antigravity/skills/event-store-design` |
| **fastapi-pro** | Build high-performance async APIs with FastAPI; SQLAlchemy 2.0; and Pydantic V2. Master microservices; WebSockets; and m | `/home/phyton/.gemini/antigravity/skills/fastapi-pro` |
| **framework-migration-legacy-modernize** | "Orchestrate a comprehensive legacy system modernization using the strangler fig pattern; enabling gradual replacement o | `/home/phyton/.gemini/antigravity/skills/framework-migration-legacy-modernize` |
| **frontend-mobile-development-component-scaffold** | "You are a React component architecture expert specializing in scaffolding production-ready; accessible; and performant  | `/home/phyton/.gemini/antigravity/skills/frontend-mobile-development-component-scaffold` |
| **multiplayer** | "Multiplayer game development principles. Architecture; networking; synchronization." | `/home/phyton/.gemini/antigravity/skills/game-development/multiplayer` |
| **git-pr-workflows-onboard** | "You are an **expert onboarding specialist and knowledge transfer architect** with deep experience in remote-first organ | `/home/phyton/.gemini/antigravity/skills/git-pr-workflows-onboard` |
| **golang-pro** | Master Go 1.21+ with modern patterns; advanced concurrency; performance optimization; and production-ready microservices | `/home/phyton/.gemini/antigravity/skills/golang-pro` |
| **graphql-architect** | Master modern GraphQL with federation; performance optimization; and enterprise security. Build scalable schemas; implem | `/home/phyton/.gemini/antigravity/skills/graphql-architect` |
| **hybrid-cloud-architect** | Expert hybrid cloud architect specializing in complex multi-cloud solutions across AWS/Azure/GCP and private clouds (Ope | `/home/phyton/.gemini/antigravity/skills/hybrid-cloud-architect` |
| **javascript-typescript-typescript-scaffold** | "You are a TypeScript project architecture expert specializing in scaffolding production-ready Node.js and frontend appl | `/home/phyton/.gemini/antigravity/skills/javascript-typescript-typescript-scaffold` |
| **kpi-dashboard-design** | "Design effective KPI dashboards with metrics selection; visualization best practices; and real-time monitoring patterns | `/home/phyton/.gemini/antigravity/skills/kpi-dashboard-design` |
| **kubernetes-architect** | Expert Kubernetes architect specializing in cloud-native infrastructure; advanced GitOps workflows (ArgoCD/Flux); and en | `/home/phyton/.gemini/antigravity/skills/kubernetes-architect` |
| **langchain-architecture** | "Design LLM applications using the LangChain framework with agents; memory; and tool integration patterns. Use when buil | `/home/phyton/.gemini/antigravity/skills/langchain-architecture` |
| **laravel-expert** | "Senior Laravel Engineer role for production-grade; maintainable; and idiomatic Laravel solutions. Focuses on clean arch | `/home/phyton/.gemini/antigravity/skills/laravel-expert` |
| **llm-app-patterns** | "Production-ready patterns for building LLM applications. Covers RAG pipelines; agent architectures; prompt IDEs; and LL | `/home/phyton/.gemini/antigravity/skills/llm-app-patterns` |
| **memory-systems** | "Design short-term; long-term; and graph-based memory architectures" | `/home/phyton/.gemini/antigravity/skills/memory-systems` |
| **mermaid-expert** | Create Mermaid diagrams for flowcharts; sequences; ERDs; and architectures. Masters syntax for all diagram types and sty | `/home/phyton/.gemini/antigravity/skills/mermaid-expert` |
| **microservices-patterns** | "Design microservices architectures with service boundaries; event-driven communication; and resilience patterns. Use wh | `/home/phyton/.gemini/antigravity/skills/microservices-patterns` |
| **mobile-developer** | Develop React Native; Flutter; or native mobile apps with modern architecture patterns. Masters cross-platform developme | `/home/phyton/.gemini/antigravity/skills/mobile-developer` |
| **monorepo-architect** | "Expert in monorepo architecture; build systems; and dependency management at scale. Masters Nx; Turborepo; Bazel; and L | `/home/phyton/.gemini/antigravity/skills/monorepo-architect` |
| **multi-agent-patterns** | "Master orchestrator; peer-to-peer; and hierarchical multi-agent architectures" | `/home/phyton/.gemini/antigravity/skills/multi-agent-patterns` |
| **multi-cloud-architecture** | "Design multi-cloud architectures using a decision framework to select and integrate services across AWS; Azure; and GCP | `/home/phyton/.gemini/antigravity/skills/multi-cloud-architecture` |
| **multi-platform-apps-multi-platform** | "Build and deploy the same feature consistently across web; mobile; and desktop platforms using API-first architecture a | `/home/phyton/.gemini/antigravity/skills/multi-platform-apps-multi-platform` |
| **nerdzao-elite** | "Senior Elite Software Engineer (15+) and Senior Product Designer. Full workflow with planning; architecture; TDD; clean | `/home/phyton/.gemini/antigravity/skills/nerdzao-elite` |
| **nestjs-expert** | "Nest.js framework expert specializing in module architecture; dependency injection; middleware; guards; interceptors; t | `/home/phyton/.gemini/antigravity/skills/nestjs-expert` |
| **network-engineer** | Expert network engineer specializing in modern cloud networking; security architectures; and performance optimization. | `/home/phyton/.gemini/antigravity/skills/network-engineer` |
| **nodejs-best-practices** | "Node.js development principles and decision-making. Framework selection; async patterns; security; and architecture. Te | `/home/phyton/.gemini/antigravity/skills/nodejs-best-practices` |
| **openapi-spec-generation** | "Generate and maintain OpenAPI 3.1 specifications from code; design-first specs; and validation patterns. Use when creat | `/home/phyton/.gemini/antigravity/skills/openapi-spec-generation` |
| **postgresql** | "Design a PostgreSQL-specific schema. Covers best-practices; data types; indexing; constraints; performance patterns; an | `/home/phyton/.gemini/antigravity/skills/postgresql` |
| **production-code-audit** | "Autonomously deep-scan entire codebase line-by-line; understand architecture and patterns; then systematically transfor | `/home/phyton/.gemini/antigravity/skills/production-code-audit` |
| **projection-patterns** | "Build read models and projections from event streams. Use when implementing CQRS read sides; building materialized view | `/home/phyton/.gemini/antigravity/skills/projection-patterns` |
| **python-development-python-scaffold** | "You are a Python project architecture expert specializing in scaffolding production-ready Python applications. Generate | `/home/phyton/.gemini/antigravity/skills/python-development-python-scaffold` |
| **react-flow-architect** | "Expert ReactFlow architect for building interactive graph applications with hierarchical node-edge systems; performance | `/home/phyton/.gemini/antigravity/skills/react-flow-architect` |
| **react-native-architecture** | "Build production React Native apps with Expo; navigation; native modules; offline sync; and cross-platform patterns. Us | `/home/phyton/.gemini/antigravity/skills/react-native-architecture` |
| **saga-orchestration** | "Implement saga patterns for distributed transactions and cross-aggregate workflows. Use when coordinating multi-step bu | `/home/phyton/.gemini/antigravity/skills/saga-orchestration` |
| **senior-architect** | "Comprehensive software architecture skill for designing scalable; maintainable systems using ReactJS; NextJS; NodeJS; E | `/home/phyton/.gemini/antigravity/skills/senior-architect` |
| **seo-structure-architect** | Analyzes and optimizes content structure including header hierarchy; suggests schema markup; and internal linking opport | `/home/phyton/.gemini/antigravity/skills/seo-structure-architect` |
| **service-mesh-expert** | "Expert service mesh architect specializing in Istio; Linkerd; and cloud-native networking patterns. Masters traffic man | `/home/phyton/.gemini/antigravity/skills/service-mesh-expert` |
| **skill-creator-ms** | "Guide for creating effective skills for AI coding agents working with Azure SDKs and Microsoft Foundry services. Use wh | `/home/phyton/.gemini/antigravity/skills/skill-creator-ms` |
| **software-architecture** | "Guide for quality focused software architecture. This skill should be used when users want to write code; design archit | `/home/phyton/.gemini/antigravity/skills/software-architecture` |
| **systems-programming-rust-project** | "You are a Rust project architecture expert specializing in scaffolding production-ready Rust applications. Generate com | `/home/phyton/.gemini/antigravity/skills/systems-programming-rust-project` |
| **tailwind-design-system** | "Build scalable design systems with Tailwind CSS; design tokens; component libraries; and responsive patterns. Use when  | `/home/phyton/.gemini/antigravity/skills/tailwind-design-system` |
| **tailwind-patterns** | "Tailwind CSS v4 principles. CSS-first configuration; container queries; modern patterns; design token architecture." | `/home/phyton/.gemini/antigravity/skills/tailwind-patterns` |
| **temporal-python-pro** | Master Temporal workflow orchestration with Python SDK. Implements durable workflows; saga patterns; and distributed tra | `/home/phyton/.gemini/antigravity/skills/temporal-python-pro` |
| **threat-modeling-expert** | "Expert in threat modeling methodologies; security architecture review; and risk assessment. Masters STRIDE; PASTA; atta | `/home/phyton/.gemini/antigravity/skills/threat-modeling-expert` |
| **tool-design** | "Build tools that agents can use effectively; including architectural reduction patterns" | `/home/phyton/.gemini/antigravity/skills/tool-design` |
| **wiki-architect** | "Analyzes code repositories and generates hierarchical documentation structures with onboarding guides. Use when the use | `/home/phyton/.gemini/antigravity/skills/wiki-architect` |
| **wiki-onboarding** | "Generates two complementary onboarding guides \u2014 a Principal-Level architectural deep-dive and a Zero-to-Hero contr | `/home/phyton/.gemini/antigravity/skills/wiki-onboarding` |
| **wordpress-plugin-development** | "WordPress plugin development workflow covering plugin architecture; hooks; admin interfaces; REST API; and security bes | `/home/phyton/.gemini/antigravity/skills/wordpress-plugin-development` |
| **wordpress-theme-development** | "WordPress theme development workflow covering theme architecture; template hierarchy; custom post types; block editor s | `/home/phyton/.gemini/antigravity/skills/wordpress-theme-development` |
| **workflow-orchestration-patterns** | "Design durable workflows with Temporal for distributed systems. Covers workflow vs activity separation; saga patterns;  | `/home/phyton/.gemini/antigravity/skills/workflow-orchestration-patterns` |

### 📦 Blockchain & Web3

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **engram-cultural-norms** | > | `/home/phyton/clawd/skills/atl/cultural-norms` |
| **agents-v2-py** | "Build container-based Foundry Agents with Azure AI Projects SDK (ImageBasedHostedAgentDefinition). Use when creating ho | `/home/phyton/.gemini/antigravity/skills/agents-v2-py` |
| **azure-keyvault-keys-rust** | 'Azure Key Vault Keys SDK for Rust. Use for creating; managing; and using cryptographic keys. Triggers: "keyvault keys r | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-keys-rust` |
| **azure-keyvault-keys-ts** | "Manage cryptographic keys using Azure Key Vault Keys SDK for JavaScript (@azure/keyvault-keys). Use when creating; encr | `/home/phyton/.gemini/antigravity/skills/azure-keyvault-keys-ts` |
| **azure-security-keyvault-keys-dotnet** | Azure Key Vault Keys SDK for .NET. Client library for managing cryptographic keys in Azure Key Vault and Managed HSM. Us | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-keys-dotnet` |
| **azure-security-keyvault-keys-java** | "Azure Key Vault Keys Java SDK for cryptographic key management. Use when creating; managing; or using RSA/EC keys; perf | `/home/phyton/.gemini/antigravity/skills/azure-security-keyvault-keys-java` |
| **blockchain-developer** | Build production-ready Web3 applications; smart contracts; and decentralized systems. Implements DeFi protocols; NFT pla | `/home/phyton/.gemini/antigravity/skills/blockchain-developer` |
| **conductor-setup** | 'Initialize project with Conductor artifacts (product definition; | `/home/phyton/.gemini/antigravity/skills/conductor-setup` |
| **crypto-bd-agent** | Autonomous crypto business development patterns — multi-chain token discovery; 100-point scoring with wallet forensics | `/home/phyton/.gemini/antigravity/skills/crypto-bd-agent` |
| **ddd-context-mapping** | "Map relationships between bounded contexts and define integration contracts using DDD context mapping patterns." | `/home/phyton/.gemini/antigravity/skills/ddd-context-mapping` |
| **defi-protocol-templates** | "Implement DeFi protocols with production-ready templates for staking; AMMs; governance; and lending systems. Use when b | `/home/phyton/.gemini/antigravity/skills/defi-protocol-templates` |
| **hosted-agents-v2-py** | "Build hosted agents using Azure AI Projects SDK with ImageBasedHostedAgentDefinition. Use when creating container-based | `/home/phyton/.gemini/antigravity/skills/hosted-agents-v2-py` |
| **nft-standards** | "Implement NFT standards (ERC-721; ERC-1155) with proper metadata handling; minting strategies; and marketplace integrat | `/home/phyton/.gemini/antigravity/skills/nft-standards` |
| **slo-implementation** | "Define and implement Service Level Indicators (SLIs) and Service Level Objectives (SLOs) with error budgets and alertin | `/home/phyton/.gemini/antigravity/skills/slo-implementation` |
| **solidity-security** | "Master smart contract security best practices to prevent common vulnerabilities and implement secure Solidity patterns. | `/home/phyton/.gemini/antigravity/skills/solidity-security` |
| **tdd-workflows-tdd-red** | "Generate failing tests for the TDD red phase to define expected behavior and edge cases." | `/home/phyton/.gemini/antigravity/skills/tdd-workflows-tdd-red` |
| **web3-testing** | "Test smart contracts comprehensively using Hardhat and Foundry with unit tests; integration tests; and mainnet forking. | `/home/phyton/.gemini/antigravity/skills/web3-testing` |

### 🎯 Proyectos Específicos

| Skill | Descripción | Ubicación |
|-------|-------------|-----------|
| **siest-backend-core** | "Reglas arquitectónicas y de desarrollo para el proyecto SIEstBackend (PHP 8+; Flight Framework; Dual DB)." | `/home/phyton/.agent/skills/siest-backend-core` |
| **zktec-adms** | > | `/home/phyton/.config/opencode/skills/zktec-adms` |
| **dexter-core** | Reglas arquitectónicas estrictas para el monolito "Dexter" (Java Web; Servlets; JSP; JDBC). | `/home/phyton/.gemini/antigravity/skills/dexter-core` |
| **moodle-external-api-development** | "Create custom external web service APIs for Moodle LMS. Use when implementing web services for course management; user  | `/home/phyton/.gemini/antigravity/skills/moodle-external-api-development` |
| **php-flight** | > | `/home/phyton/SIEstBackend/.agent/skills/php-flight` |
| **php-phinx** | > | `/home/phyton/SIEstBackend/.agent/skills/php-phinx` |
| **sdd-apply** | > | `/home/phyton/SIEstBackend/.agent/skills/sdd-apply` |
| **sdd-verify** | > | `/home/phyton/SIEstBackend/.agent/skills/sdd-verify` |
| **zktec-adms** | > | `/home/phyton/SIEstBackend/.agent/skills/zktec-adms` |

---

## 📈 Estadísticas

### Top 20 Skills Más Comunes (duplicados)
- **sdd-verify** — 7 copias
- **sdd-apply** — 7 copias
- **skill-creator** — 6 copias
- **sdd-tasks** — 6 copias
- **sdd-spec** — 6 copias
- **sdd-propose** — 6 copias
- **sdd-init** — 6 copias
- **sdd-explore** — 6 copias
- **sdd-design** — 6 copias
- **sdd-archive** — 6 copias
- **go-testing** — 5 copias
- **zktec-adms** — 2 copias
- **xlsx-official** — 2 copias
- **pptx-official** — 2 copias
- **php-phinx** — 2 copias
- **php-flight** — 2 copias
- **pdf-official** — 2 copias
- **docx-official** — 2 copias
- **zustand-store-ts** — 1 copias
- **zoom-automation** — 1 copias

### Skills Únicos por Categoría

| Categoría | Cantidad |
|-----------|----------|
| Backend | 275 |
| Frontend | 296 |
| Database | 67 |
| DevOps & Cloud | 202 |
| Security | 97 |
| AI & ML | 1003 |
| Automation | 137 |
| Testing & QA | 120 |
| Business & Marketing | 251 |
| Git & Workflow | 537 |

---

## 💡 Cómo Usar Este Índice

1. **Buscar por nombre**: `Ctrl+F` en este archivo
2. **Buscar por categoría**: Ir a la sección correspondiente
3. **Ver la ruta completa**: Copiar el path de la columna "Ubicación"
4. **Activar un skill**: Copiarlo a `.config/opencode/skills/` o al directorio correspondiente

### Activar un Skill

```bash
# Copiar un skill a OpenCode
cp -r /home/phyton/.gemini/antigravity/skills/{skill-name} ~/.config/opencode/skills/

# Copiar un skill a Cursor
cp -r /home/phyton/.gemini/antigravity/skills/{skill-name} ~/.cursor/skills/

# Copiar un skill a Claude Code
cp -r /home/phyton/.gemini/antigravity/skills/{skill-name} ~/.claude/skills/
```

---

## ⚠️ Notas

- Los skills en `.gemini/antigravity/skills/` y `.agent/skills/` son **symlinked** — apuntan al mismo lugar
- Hay **duplicados** entre herramientas (Gemini, Cursor, Copilot, Claude) — los mismos skills están en múltiples ubicaciones
- Los skills de proyectos específicos (SIEstBackend) están en el directorio del proyecto
- Este índice se puede regenerar ejecutando: `bash /tmp/skills_scan.sh && bash /tmp/generate_index.sh`
