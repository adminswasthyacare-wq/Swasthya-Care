<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pathology AI Smart Snippet Expander (Local Client-Side)</title>
    <!-- Tailwind CSS for modern, clean UI design -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons for professional UI iconography -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col">

    <!-- Header -->
    <header class="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-30">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-indigo-400">
                    <i data-lucide="cpu" class="w-6 h-6"></i>
                </div>
                <div>
                    <h1 class="font-semibold text-lg tracking-tight">PathoExpand AI</h1>
                    <p class="text-xs text-slate-400">Local In-Browser Semantic Text Expander (Transformers.js)</p>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <span id="system-status-badge" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <span class="w-2 h-2 mr-2 rounded-full bg-amber-400 animate-pulse"></span>
                    Initializing Engine...
                </span>
            </div>
        </div>
    </header>

    <!-- Main Application Layout -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Left 2 Columns: Editor Workstation -->
        <section class="lg:col-span-2 flex flex-col space-y-4">
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 flex-1 flex flex-col shadow-xl">
                <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <div class="flex items-center space-x-2">
                        <i data-lucide="file-text" class="w-4 h-4 text-slate-400"></i>
                        <span class="text-sm font-medium text-slate-300">Clinical Consultation Notes</span>
                    </div>
                    <div class="text-xs text-slate-400 flex items-center space-x-1">
                        <i data-lucide="info" class="w-3.5 h-3.5 text-indigo-400"></i>
                        <span>Type <code class="bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded">/symptoms [text]</code> + <code class="bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded">Space</code></span>
                    </div>
                </div>

                <!-- Textarea Workspace -->
                <div class="relative flex-1 flex flex-col">
                    <textarea 
                        id="clinical-editor" 
                        class="w-full flex-1 bg-slate-950 border border-slate-800 rounded-lg p-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none font-mono text-sm leading-relaxed"
                        placeholder="Start typing your clinical notes here... 
Example: Patient presents with /symptoms extreme fatigue, pale skin, cold hands and feels dizzy when standing up..."></textarea>
                    
                    <!-- Floating Processing Overlay / Indicator inside textarea area -->
                    <div id="processing-overlay" class="absolute bottom-4 right-4 bg-indigo-600/90 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg backdrop-blur flex items-center space-x-2 hidden">
                        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Computing Semantic Embeddings...</span>
                    </div>
                </div>

                <!-- Footer Tip -->
                <div class="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                    <span>100% Client-Side Execution (Zero Cloud Telemetry)</span>
                    <button id="clear-btn" class="hover:text-slate-300 transition-colors flex items-center space-x-1">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        <span>Clear Notes</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Right Column: Sidebar (Status & Live Suggestions) -->
        <aside class="flex flex-col space-y-6">
            
            <!-- AI Engine Status Box -->
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
                <h2 class="text-sm font-semibold text-slate-200 mb-4 flex items-center justify-between">
                    <span>Local AI Engine Status</span>
                    <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>
                </h2>
                
                <div class="space-y-3 text-sm">
                    <div class="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                        <span class="text-slate-400">Model Architecture</span>
                        <span class="font-mono text-xs text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/40">MiniLM-L6-v2</span>
                    </div>
                    <div class="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                        <span class="text-slate-400">Runtime Environment</span>
                        <span class="text-slate-200 font-medium">WebAssembly (ONNX)</span>
                    </div>
                    <div class="flex justify-between items-center py-1.5">
                        <span class="text-slate-400">Catalog Database</span>
                        <span id="db-status" class="text-amber-400 font-medium">Loading JSON...</span>
                    </div>
                </div>

                <div id="progress-container" class="mt-4 hidden">
                    <div class="flex justify-between text-xs text-slate-400 mb-1">
                        <span id="progress-label">Downloading Model Weights...</span>
                        <span id="progress-percent">0%</span>
                    </div>
                    <div class="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                        <div id="progress-bar" class="bg-indigo-500 h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
                    </div>
                </div>
            </div>

            <!-- Live Semantic Suggestions / Match Inspector Panel -->
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl flex-1 flex flex-col">
                <h2 class="text-sm font-semibold text-slate-200 mb-3 flex items-center space-x-2">
                    <i data-lucide="sparkles" class="w-4 h-4 text-indigo-400"></i>
                    <span>Live Match Inspector</span>
                </h2>
                
                <div id="suggestions-panel" class="flex-1 flex flex-col justify-center items-center text-center p-6 border border-dashed border-slate-800 rounded-lg bg-slate-950/40">
                    <div class="p-3 bg-slate-900 rounded-full text-slate-500 mb-3">
                        <i data-lucide="search" class="w-6 h-6"></i>
                    </div>
                    <p class="text-sm text-slate-400 font-medium">No trigger command processed yet</p>
                    <p class="text-xs text-slate-600 mt-1 max-w-xs">Type a <code class="text-indigo-400">/symptoms</code> command in the editor to activate semantic matching against the pathology catalog.</p>
                </div>
            </div>

        </aside>

    </main>

    <!-- Transformers.js Script from CDN -->
    <script type="module">
        import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.16.0';

        // Configure environment for browser execution
        env.allowLocalModels = false;
        env.useBrowserCache = true;

        let embedder = null;
        let symptomsDatabase = [];
        let embeddedCatalog = [];

        const systemStatusBadge = document.getElementById('system-status-badge');
        const dbStatus = document.getElementById('db-status');
        const progressContainer = document.getElementById('progress-container');
        const progressBar = document.getElementById('progress-bar');
        const progressPercent = document.getElementById('progress-percent');
        const progressLabel = document.getElementById('progress-label');
        const processingOverlay = document.getElementById('processing-overlay');
        const editor = document.getElementById('clinical-editor');
        const suggestionsPanel = document.getElementById('suggestions-panel');
        const clearBtn = document.getElementById('clear-btn');

        // Initialize Lucide icons
        lucide.createIcons();

        // 1. Asynchronously fetch external symptoms database JSON
        async function loadSymptomsDatabase() {
            try {
                dbStatus.textContent = "Fetching JSON...";
                const response = await handleError(fetch('symptoms_database.json'));
                symptomsDatabase = await response.json();
                dbStatus.textContent = `${symptomsDatabase.length} Catalog Items Loaded`;
                dbStatus.className = "text-emerald-400 font-medium";
            } catch (err) {
                console.error("Failed to load symptoms_database.json:", err);
                dbStatus.textContent = "Failed to load JSON";
                dbStatus.className = "text-rose-400 font-medium";
                // Fallback default catalog if external file is missing/blocked locally
                symptomsDatabase = [
                    {
                        "id": "anemia_panel",
                        "keywords": "extreme fatigue, pale skin, cold hands, dizziness, weakness, low hemoglobin",
                        "snippet": "Recommended Lab panel: Complete Blood Count (CBC), Serum Iron, Ferritin, Total Iron-Binding Capacity (TIBC) [Targeting Anemia Panel]"
                    },
                    {
                        "id": "lipid_panel",
                        "keywords": "chest discomfort, high blood pressure, history of heart disease, obesity, shortness of breath",
                        "snippet": "Recommended Lab panel: Comprehensive Lipid Panel (Total Cholesterol, Triglycerides, HDL, LDL), Fasting Blood Glucose [Targeting Cardiovascular Risk]"
                    },
                    {
                        "id": "thyroid_panel",
                        "keywords": "weight gain, sluggishness, cold intolerance, hair loss, dry skin, fatigue",
                        "snippet": "Recommended Lab panel: Thyroid Stimulating Hormone (TSH), Free T3, Free T4 [Targeting Hypothyroidism Workup]"
                    },
                    {
                        "id": "diabetes_panel",
                        "keywords": "excessive thirst, frequent urination, unexplained weight loss, blurred vision, constant hunger",
                        "snippet": "Recommended Lab panel: HbA1c, Fasting Plasma Glucose, Random Urine Albumin-to-Creatinine Ratio [Targeting Glycemic / Diabetes Screening]"
                    }
                ];
                dbStatus.textContent = `${symptomsDatabase.length} Items (Fallback Catalog)`;
                dbStatus.className = "text-amber-400 font-medium";
            }
        }

        // Helper wrapper for fetch error handling
        async function handleError(promise) {
            const res = await promise;
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res;
        }

        // 2. Initialize Local AI Embedding Engine (Transformers.js)
        async function initializeAIEngine() {
            try {
                progressContainer.classList.remove('hidden');
                
                // Load Xenova feature extraction model with progress callback
                embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
                    progress_callback: (data) => {
                        if (data.status === 'progress' && data.total) {
                            const pct = Math.round((data.loaded / data.total) * 100);
                            progressBar.style.width = `${pct}%`;
                            progressPercent.textContent = `${pct}%`;
                            progressLabel.textContent = `Downloading ${data.file || 'Model'}`;
                        }
                    }
                });

                progressContainer.classList.add('hidden');
                systemStatusBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                systemStatusBadge.innerHTML = `<span class="w-2 h-2 mr-2 rounded-full bg-emerald-400"></span> AI Engine Ready`;

                // Precompute embeddings for all items in the symptoms database
                await precomputeCatalogEmbeddings();

            } catch (err) {
                console.error("AI Engine initialization failed:", err);
                progressContainer.classList.add('hidden');
                systemStatusBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20";
                systemStatusBadge.innerHTML = `<span class="w-2 h-2 mr-2 rounded-full bg-rose-400"></span> Engine Error`;
            }
        }

        // Precompute database embeddings for fast cosine similarity evaluation
        async function precomputeCatalogEmbeddings() {
            embeddedCatalog = [];
            for (const item of symptomsDatabase) {
                const output = await embedder(item.keywords, { pooling: 'mean', normalize: true });
                embeddedCatalog.push({
                    ...item,
                    embedding: Array.from(output.data)
                });
            }
        }

        // Mathematical Cosine Similarity Calculator between two vectors
        function cosineSimilarity(vecA, vecB) {
            let dotProduct = 0.0;
            let normA = 0.0;
            let normB = 0.0;
            for (let i = 0; i < vecA.length; i++) {
                dotProduct += vecA[i] * vecB[i];
                normA += vecA[i] * vecA[i];
                normB += vecB[i] * vecB[i];
            }
            if (normA === 0 || normB === 0) return 0;
            return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
        }

        // 3. Process semantic matching against the database
        async function processSemanticMatch(queryText) {
            if (!embedder || embeddedCatalog.length === 0) return null;

            processingOverlay.classList.remove('hidden');
            try {
                // Generate embedding for user's inputted symptom string
                const output = await embedder(queryText, { pooling: 'mean', normalize: true });
                const queryEmbedding = Array.from(output.data);

                let bestMatch = null;
                let highestScore = -1;

                // Compute cosine similarity across all catalog items
                for (const catalogItem of embeddedCatalog) {
                    const score = cosineSimilarity(queryEmbedding, catalogItem.embedding);
                    if (score > highestScore) {
                        highestScore = score;
                        bestMatch = catalogItem;
                    }
                }

                processingOverlay.classList.add('hidden');
                return { match: bestMatch, confidence: highestScore };

            } catch (err) {
                console.error("Error computing embeddings:", err);
                processingOverlay.classList.add('hidden');
                return null;
            }
        }

        // Update the Live Suggestions Panel UI
        function updateSuggestionsPanel(result, queryText) {
            if (!result) return;
            const { match, confidence } = result;
            const confidencePercent = Math.round(confidence * 100);
            
            // Choose badge color based on confidence score
            let badgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            if (confidencePercent < 60) badgeColor = "bg-amber-500/10 text-amber-400 border-amber-500/20";

            suggestionsPanel.className = "bg-slate-950 border border-slate-800 rounded-lg p-4 flex flex-col justify-between text-left";
            suggestionsPanel.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Top Semantic Match</span>
                        <span class="px-2 py-0.5 rounded text-xs font-mono border ${badgeColor}">${confidencePercent}% Match</span>
                    </div>
                    <p class="text-xs text-slate-400 mb-1 font-mono">Query: "${escapeHtml(queryText)}"</p>
                    <div class="bg-slate-900 border border-slate-800/80 rounded-lg p-3 my-2">
                        <p class="text-xs font-medium text-slate-300 mb-1">Matched Catalog ID: <span class="text-indigo-300 font-mono">${escapeHtml(match.id)}</span></p>
                        <p class="text-xs text-slate-400 italic">Catalog Keywords: "${escapeHtml(match.keywords)}"</p>
                    </div>
                </div>
                <div class="mt-3 pt-3 border-t border-slate-800/60">
                    <p class="text-xs font-semibold text-slate-300 mb-1">Expanded Snippet Result:</p>
                    <p class="text-xs font-mono text-emerald-300 bg-emerald-950/30 p-2.5 rounded border border-emerald-900/40">${escapeHtml(match.snippet)}</p>
                </div>
            `;
        }

        // Helper to prevent HTML injection in previews
        function escapeHtml(str) {
            return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        // Keystroke Interceptor Listener (/symptoms command followed by Space)
        editor.addEventListener('keydown', async (e) => {
            if (e.key === ' ') {
                const cursorPosition = editor.selectionStart;
                const textBeforeCursor = editor.value.substring(0, cursorPosition);
                
                // Regex pattern matching: /symptoms [keywords...]
                const regex = /\/symptoms\s+([^\n]+)$/i;
                const match = textBeforeCursor.match(regex);

                if (match) {
                    e.preventDefault(); // Prevent spacebar insertion temporarily
                    const searchKeywords = match[1].trim();
                    const fullTriggerString = match[0];

                    if (!searchKeywords) return;

                    // Execute local semantic AI match
                    const result = await processSemanticMatch(searchKeywords);

                    if (result && result.match) {
                        // Replace the typed /symptoms trigger with the expanded clinical snippet
                        const textAfterCursor = editor.value.substring(cursorPosition);
                        const newTextBefore = textBeforeCursor.substring(0, textBeforeCursor.length - fullTriggerString.length);
                        
                        editor.value = newTextBefore + result.match.snippet + " " + textAfterCursor;
                        
                        // Move cursor position right after the inserted snippet
                        const newCursorPos = newTextBefore.length + result.match.snippet.length + 1;
                        editor.setSelectionRange(newCursorPos, newCursorPos);

                        // Update sidebar inspector panel
                        updateSuggestionsPanel(result, searchKeywords);
                    }
                }
            }
        });

        // Clear notes button handler
        clearBtn.addEventListener('click', () => {
            editor.value = "";
            editor.focus();
            suggestionsPanel.className = "flex-1 flex flex-col justify-center items-center text-center p-6 border border-dashed border-slate-800 rounded-lg bg-slate-950/40";
            suggestionsPanel.innerHTML = `
                <div class="p-3 bg-slate-900 rounded-full text-slate-500 mb-3">
                    <i data-lucide="search" class="w-6 h-6"></i>
                </div>
                <p class="text-sm text-slate-400 font-medium">No trigger command processed yet</p>
                <p class="text-xs text-slate-600 mt-1 max-w-xs">Type a <code class="text-indigo-400">/symptoms</code> command in the editor to activate semantic matching against the pathology catalog.</p>
            `;
            lucide.createIcons();
        });

        // Run initialization sequence on window load
        window.addEventListener('DOMContentLoaded', async () => {
            await loadSymptomsDatabase();
            await initializeAIEngine();
        });
    </script>
</body>
</html>
