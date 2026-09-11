/**
 * PathoDiagnostic Engine - Symptom & Exposure to Clinical Parameter Engine
 * Maps user queries (slang, vulgar, medical, physical, sexual, biological)
 * directly to required clinical diagnostic PARAMETERS and ANALYTES so an AI chatbot
 * can search and match them against a custom laboratory test catalog.
 */

class PathoLexiconEngine {
    constructor() {
        // Diagnostic Parameters & Analytes Database mapped from Symptoms and Exposures
        this.symptomParameterMapping = {
            // --- SEXUAL EXPOSURES & VULGAR PHRASING ---
            "anal sex": {
                requiredParameters: [
                    "Rectal Chlamydia trachomatis DNA PCR",
                    "Rectal Neisseria gonorrhoeae DNA PCR",
                    "HIV 1/2 Ag/Ab Combo (4th Gen)",
                    "Syphilis Treponema Antibody / RPR",
                    "Hepatitis B Surface Antigen (HBsAg)",
                    "Hepatitis C Antibody",
                    "Fecal Occult Blood / FIT"
                ],
                specimenTypes: ["Rectal Swab", "Venous Serum (Blood)", "Stool Sample"],
                urgency: "Medium",
                rationale: "Receptive/insertive anal exposure requires rectal NAAT PCR for localized bacterial proctitis pathogens, serological screening for bloodborne viruses, and fecal hemoglobin check for mucosal trauma."
            },
            "ass fuck": {
                requiredParameters: [
                    "Rectal Chlamydia trachomatis DNA PCR",
                    "Rectal Neisseria gonorrhoeae DNA PCR",
                    "HIV 1/2 Ag/Ab Combo",
                    "Syphilis RPR / TPHA",
                    "Fecal Hemoglobin Immunoassay"
                ],
                specimenTypes: ["Rectal Swab", "Venous Serum (Blood)", "Stool Sample"],
                urgency: "Medium",
                rationale: "Requires rectal multiplex NAAT screening for rectal STIs, serological bloodborne virus panel, and occult blood testing if trauma or rectal bleeding occurred."
            },
            "butt sex": {
                requiredParameters: [
                    "Rectal Chlamydia trachomatis DNA PCR",
                    "Rectal Neisseria gonorrhoeae DNA PCR",
                    "HIV 1/2 Ag/Ab Combo",
                    "Syphilis Treponemal Antibodies",
                    "Fecal Occult Blood"
                ],
                specimenTypes: ["Rectal Swab", "Venous Serum (Blood)", "Stool Sample"],
                urgency: "Medium",
                rationale: "Anal mucosal exposure warrants targeted rectal mucosal swabs, bloodborne serology, and fecal hemoglobin evaluation."
            },

            "oral sex": {
                requiredParameters: [
                    "Pharyngeal Chlamydia trachomatis DNA PCR",
                    "Pharyngeal Neisseria gonorrhoeae DNA PCR",
                    "HSV-1 & HSV-2 DNA PCR"
                ],
                specimenTypes: ["Pharyngeal (Throat) Swab", "Oral Lesion Swab"],
                urgency: "Low",
                rationale: "Orogenital exposure requires throat NAAT PCR testing for pharyngeal gonorrhea/chlamydia and viral DNA PCR if oral ulcers/cold sores develop."
            },
            "blowjob": {
                requiredParameters: [
                    "Pharyngeal / Urethral Chlamydia trachomatis PCR",
                    "Pharyngeal / Urethral Neisseria gonorrhoeae PCR",
                    "HSV-1 & HSV-2 DNA PCR"
                ],
                specimenTypes: ["Pharyngeal Swab", "First-Catch Urine", "Lesion Swab"],
                urgency: "Low",
                rationale: "Oral-penile exposure warrants upper mucosal swab or urine NAAT and lesion viral typing if vesicular bumps are present."
            },
            "eating out": {
                requiredParameters: [
                    "Pharyngeal Chlamydia trachomatis PCR",
                    "Pharyngeal Neisseria gonorrhoeae PCR",
                    "HSV-1 / HSV-2 DNA PCR"
                ],
                specimenTypes: ["Pharyngeal Swab", "Vulvar / Mucosal Swab"],
                urgency: "Low",
                rationale: "Orovaginal exposure indicates checking mucosal pharyngeal NAAT and herpes viral DNA."
            },
            "unprotected sex": {
                requiredParameters: [
                    "Chlamydia trachomatis DNA PCR",
                    "Neisseria gonorrhoeae DNA PCR",
                    "Trichomonas vaginalis DNA PCR",
                    "Mycoplasma genitalium DNA PCR",
                    "Ureaplasma urealyticum PCR",
                    "HIV 1/2 Ag/Ab Combo (4th Gen)",
                    "Syphilis RPR / TPHA",
                    "Hepatitis B Surface Antigen (HBsAg)",
                    "Hepatitis C Antibody",
                    "HPV High-Risk Genotypes (16, 18, 45, etc.)"
                ],
                specimenTypes: ["First-Catch Urine", "Genital Swab", "Venous Serum (Blood)"],
                urgency: "High",
                rationale: "Barrierless sexual exposure mandates comprehensive multiplex NAAT PCR for bacterial pathogens, high-risk oncogenic HPV, and full bloodborne serology."
            },

            // --- GYNECOLOGICAL, VAGINAL & ANATOMICAL SYMPTOMS ---
            "pussy": {
                requiredParameters: [
                    "Wet Mount Microscopy (Clue Cells, Trichomonads, Yeast)",
                    "Gram Stain Nugent Score (Bacterial Vaginosis)",
                    "Candida Fungal Culture & KOH Prep",
                    "Chlamydia / Gonorrhea NAAT PCR",
                    "Urinalysis Leukocyte Esterase & Nitrite"
                ],
                specimenTypes: ["Vaginal Swab", "Clean-Catch Urine"],
                urgency: "Low",
                rationale: "General female genital symptoms require vaginal microflora analysis, wet mount microscopy, STI NAAT, and urinary infection screening."
            },
            "vagina": {
                requiredParameters: [
                    "Wet Mount Microscopy",
                    "Gram Stain Nugent Score",
                    "Candida Culture & KOH Prep",
                    "Chlamydia / Gonorrhea NAAT PCR"
                ],
                specimenTypes: ["Vaginal / Cervical Swab"],
                urgency: "Low",
                rationale: "Vaginal discomfort indicates evaluating microflora balance, fungal yeast overgrowth, and bacterial STI screening."
            },
            "pussy hurting": {
                requiredParameters: [
                    "Wet Mount Microscopy",
                    "Gram Stain Nugent Score",
                    "Chlamydia / Gonorrhea NAAT PCR",
                    "HSV-1 & HSV-2 DNA PCR",
                    "High-Sensitivity C-Reactive Protein (hs-CRP)",
                    "Erythrocyte Sedimentation Rate (ESR)"
                ],
                specimenTypes: ["Vaginal Swab", "Cutaneous Swab", "Venous Serum"],
                urgency: "Medium",
                rationale: "Vulvovaginal pain requires differential testing for vaginitis, acute STI ulcers, herpes viral outbreaks, and inflammatory markers (hs-CRP/ESR) for pelvic infection."
            },
            "vaginal pain": {
                requiredParameters: [
                    "Wet Mount Microscopy",
                    "Gram Stain Nugent Score",
                    "Chlamydia / Gonorrhea / Trichomonas NAAT",
                    "hs-CRP",
                    "ESR",
                    "Creatine Kinase Total (CK / CPK)"
                ],
                specimenTypes: ["Vaginal Swab", "Venous Serum"],
                urgency: "Medium",
                rationale: "Indicates evaluating infectious vaginitis, pelvic inflammatory disease markers (hs-CRP/ESR), and muscle enzymes for pelvic floor muscle hypertonicity."
            },
            "vaginismus": {
                requiredParameters: [
                    "Creatine Kinase Total (CK / CPK)",
                    "Lactate Dehydrogenase (LDH)",
                    "Serum Electrolyte Panel (Calcium, Magnesium, Potassium, Sodium)",
                    "Wet Mount Microscopy",
                    "Gram Stain Nugent Score"
                ],
                specimenTypes: ["Venous Serum", "Vaginal Swab"],
                urgency: "Medium",
                rationale: "Involuntary pelvic muscle constriction requires assessing muscle damage/hypertonicity enzymes (CK/LDH) and serum electrolytes while ruling out mucosal vaginitis."
            },
            "muscle contraction": {
                requiredParameters: [
                    "Creatine Kinase Total (CK / CPK)",
                    "Lactate Dehydrogenase (LDH)",
                    "Serum Myoglobin",
                    "Calcium (Ionized & Total)",
                    "Magnesium",
                    "Potassium & Sodium"
                ],
                specimenTypes: ["Venous Serum"],
                urgency: "Medium",
                rationale: "Severe muscular spasm or localized tightness requires evaluating serum muscle enzymes (CK/LDH/Myoglobin) and intracellular electrolyte balance."
            },
            "tight vagina": {
                requiredParameters: [
                    "Creatine Kinase Total (CK / CPK)",
                    "Electrolyte Panel (Magnesium, Calcium)",
                    "Wet Mount Microscopy"
                ],
                specimenTypes: ["Venous Serum", "Vaginal Swab"],
                urgency: "Low",
                rationale: "Pelvic tightness or spasm suggests checking muscle enzymes, serum electrolytes, and underlying vaginal mucosal inflammation."
            },
            "vaginal discharge": {
                requiredParameters: [
                    "Gram Stain Nugent Score (BV)",
                    "Wet Mount Clue Cells & Trichomonads",
                    "Candida Fungal Culture & KOH Prep",
                    "Chlamydia trachomatis PCR",
                    "Neisseria gonorrhoeae PCR",
                    "Trichomonas vaginalis PCR"
                ],
                specimenTypes: ["Vaginal Swab", "Cervical Swab"],
                urgency: "High",
                rationale: "Abnormal discharge mandates immediate Gram stain Nugent scoring, fungal microscopy, and molecular PCR testing for bacterial and protozoal pathogens."
            },
            "pussy discharge": {
                requiredParameters: [
                    "Gram Stain Nugent Score",
                    "Wet Mount Microscopy",
                    "Chlamydia trachomatis PCR",
                    "Neisseria gonorrhoeae PCR",
                    "Mycoplasma genitalium PCR"
                ],
                specimenTypes: ["Vaginal / Genital Swab"],
                urgency: "High",
                rationale: "Genital fluid discharge requires microbiological microscopy and molecular multiplex PCR testing for Gonorrhea, Chlamydia, and BV."
            },
            "smelly vagina": {
                requiredParameters: [
                    "Gram Stain Nugent Score (BV)",
                    "Vaginal pH",
                    "Amine Odor Test (Whiff Test)",
                    "Trichomonas vaginalis PCR"
                ],
                specimenTypes: ["Vaginal Swab"],
                urgency: "Medium",
                rationale: "Foul or fishy vaginal odor requires Nugent score evaluation, pH assessment, and Trichomonas PCR."
            },
            "fishy odor": {
                requiredParameters: [
                    "Gram Stain Nugent Score",
                    "Vaginal pH",
                    "Amine Odor Test",
                    "Clue Cell Microscopy"
                ],
                specimenTypes: ["Vaginal Swab"],
                urgency: "Medium",
                rationale: "Fishy genital odor is pathognomonic for Bacterial Vaginosis (BV), requiring Gram stain and clue cell detection."
            },
            "clumpy white discharge": {
                requiredParameters: [
                    "Candida Fungal Culture",
                    "KOH Microscopic Prep (Pseudohyphae & Budding Yeast)",
                    "Vaginal pH"
                ],
                specimenTypes: ["Vaginal Swab"],
                urgency: "Low",
                rationale: "Cottage cheese-like discharge indicates fungal Candida microscopic prep and fungal culture."
            },

            // --- MALE ANATOMY & UROLOGY SYMPTOMS ---
            "dick": {
                requiredParameters: [
                    "Chlamydia trachomatis PCR",
                    "Neisseria gonorrhoeae PCR",
                    "Trichomonas vaginalis PCR",
                    "Mycoplasma genitalium PCR",
                    "Urinalysis Leukocyte Esterase & Nitrite",
                    "HSV-1 / HSV-2 DNA PCR"
                ],
                specimenTypes: ["First-Catch Urine", "Urethral Swab", "Lesion Swab"],
                urgency: "Low",
                rationale: "Penile symptoms require first-catch urine NAAT PCR for urethritis pathogens, urinalysis, and swab testing if lesions exist."
            },
            "penis": {
                requiredParameters: [
                    "Chlamydia / Gonorrhea NAAT PCR",
                    "Urinalysis with Microscopic Examination",
                    "HSV-1 / HSV-2 DNA PCR"
                ],
                specimenTypes: ["First-Catch Urine", "Urethral Swab"],
                urgency: "Low",
                rationale: "Penile discomfort or discharge warrants urethral STI PCR screening and urine culture."
            },
            "penile discharge": {
                requiredParameters: [
                    "Neisseria gonorrhoeae PCR",
                    "Chlamydia trachomatis PCR",
                    "Mycoplasma genitalium PCR",
                    "Urethral Gram Stain (Intracellular Diplococci)",
                    "Urinalysis Leukocyte Esterase"
                ],
                specimenTypes: ["First-Catch Urine", "Urethral Swab"],
                urgency: "High",
                rationale: "Clear, white, or purulent urethral discharge is a classic indicator of Gonococcal or Non-Gonococcal Urethritis (NGU)."
            },
            "cum hurting": {
                requiredParameters: [
                    "Prostate-Specific Antigen Total (Total PSA)",
                    "Free PSA",
                    "Chlamydia / Gonorrhea NAAT PCR",
                    "Post-Massage Urine / Prostatic Secretion Culture",
                    "Urine Microscopic Examination"
                ],
                specimenTypes: ["Venous Serum", "Post-Massage Urine", "First-Catch Urine"],
                urgency: "Medium",
                rationale: "Painful ejaculation (dysorgasmia) suggests prostatic inflammation (prostatitis), urethritis, or seminal vesiculitis requiring PSA and prostatic culture."
            },
            "ball pain": {
                requiredParameters: [
                    "Chlamydia trachomatis PCR",
                    "Neisseria gonorrhoeae PCR",
                    "Urine Bacterial Culture & AST",
                    "CBC with Differential (WBC Count)"
                ],
                specimenTypes: ["First-Catch Urine", "Clean-Catch Urine", "Venous Whole Blood"],
                urgency: "High",
                rationale: "Testicular or scrotal ache/swelling requires evaluating for acute bacterial epididymitis (Chlamydia/Gonorrhea) or urinary tract pathogen spread."
            },
            "testicle pain": {
                requiredParameters: [
                    "Chlamydia / Gonorrhea NAAT PCR",
                    "Urine Culture & Antibiotic Susceptibility Testing (AST)",
                    "Leukocyte Esterase"
                ],
                specimenTypes: ["First-Catch Urine", "Midstream Urine"],
                urgency: "High",
                rationale: "Scrotal pain warrants urine culture and STI NAAT to rule out bacterial epididymo-orchitis."
            },
            "prostate pain": {
                requiredParameters: [
                    "Total PSA",
                    "Free PSA",
                    "Post-Massage Urine Culture",
                    "Urine Microscopic RBC/WBC Count"
                ],
                specimenTypes: ["Venous Serum", "Post-Massage Urine"],
                urgency: "Medium",
                rationale: "Perineal ache, urinary hesitancy, and rectal pressure indicate serum PSA evaluation and prostatic fluid/urine culture."
            },

            // --- URINARY & DYSSURIA SYMPTOMS ---
            "burning urination": {
                requiredParameters: [
                    "Urinalysis Leukocyte Esterase & Nitrite",
                    "Urine Sediment Microscopic RBC/WBC Count",
                    "Quantitative Bacterial Urine Culture & AST",
                    "Chlamydia / Gonorrhea NAAT PCR"
                ],
                specimenTypes: ["Clean-Catch Midstream Urine", "First-Catch Urine"],
                urgency: "High",
                rationale: "Pain or burning when peeing (dysuria) requires urinalysis with microscopic leukocyte/nitrite evaluation, quantitative urine culture, and STI urethritis screening."
            },
            "peeing hurts": {
                requiredParameters: [
                    "Urinalysis Leukocyte Esterase & Nitrite",
                    "Urine Sediment Microscopic RBC/WBC",
                    "Quantitative Bacterial Urine Culture",
                    "Chlamydia / Gonorrhea PCR"
                ],
                specimenTypes: ["Clean-Catch Midstream Urine", "First-Catch Urine"],
                urgency: "High",
                rationale: "Dysuria indicates urinalysis, urine culture, and STI testing."
            },
            "pussy burning when peeing": {
                requiredParameters: [
                    "Urinalysis Leukocyte Esterase & Nitrite",
                    "Urine Culture & AST",
                    "Wet Mount Microscopy (Clue cells, Yeast)",
                    "Chlamydia / Gonorrhea NAAT PCR"
                ],
                specimenTypes: ["Clean-Catch Midstream Urine", "Vaginal Swab"],
                urgency: "High",
                rationale: "Stinging during micturition requires differentiating urinary tract infection (UTI) from vaginitis or STI urethritis."
            },

            // --- RECTAL, ANAL & STOOL SYMPTOMS ---
            "anal pain": {
                requiredParameters: [
                    "Rectal Chlamydia trachomatis PCR",
                    "Rectal Neisseria gonorrhoeae PCR",
                    "Rectal HSV-1 / HSV-2 DNA PCR",
                    "Fecal Occult Blood / FIT",
                    "Fecal Calprotectin"
                ],
                specimenTypes: ["Rectal Swab", "Stool Sample"],
                urgency: "Medium",
                rationale: "Rectal pain requires testing for infectious proctitis pathogens, herpes simplex, fecal occult bleeding, and intestinal inflammation."
            },
            "butt hurting": {
                requiredParameters: [
                    "Rectal Chlamydia / Gonorrhea PCR",
                    "Fecal Occult Blood / FIT"
                ],
                specimenTypes: ["Rectal Swab", "Stool Sample"],
                urgency: "Medium",
                rationale: "Anal/perianal aching indicates checking for infectious proctitis or perianal mucosal bleeding."
            },
            "bleeding from ass": {
                requiredParameters: [
                    "Fecal Hemoglobin Immunoassay (FIT)",
                    "Fecal Calprotectin",
                    "Stool Enteric Pathogen PCR Panel",
                    "Rectal Chlamydia / Gonorrhea PCR"
                ],
                specimenTypes: ["Stool Sample", "Rectal Swab"],
                urgency: "High",
                rationale: "Rectal bleeding requires quantitative fecal hemoglobin (FIT), inflammatory calprotectin, stool culture, and proctitis swabs."
            },
            "rectal discharge": {
                requiredParameters: [
                    "Rectal Chlamydia trachomatis PCR (including LGV strains)",
                    "Rectal Neisseria gonorrhoeae PCR",
                    "Stool Culture / Enteric Pathogen PCR"
                ],
                specimenTypes: ["Rectal Swab", "Fresh Stool"],
                urgency: "High",
                rationale: "Mucous or purulent rectal discharge indicates proctitis PCR testing for Gonorrhea and Chlamydia Lymphogranuloma Venereum (LGV)."
            },

            // --- CUTANEOUS, SORES & DERMATOLOGY SYMPTOMS ---
            "sores": {
                requiredParameters: [
                    "HSV-1 DNA PCR",
                    "HSV-2 DNA PCR",
                    "Syphilis Treponemal Antibody / RPR Serology",
                    "Darkfield Microscopy / Treponema PCR"
                ],
                specimenTypes: ["Lesion Swab / Fluid Aspirate", "Venous Serum"],
                urgency: "High",
                rationale: "Ulcerative sores or blisters on mucosal/skin surfaces require viral HSV DNA PCR swab and Syphilis serology (RPR/TPHA)."
            },
            "blisters": {
                requiredParameters: [
                    "HSV-1 DNA PCR",
                    "HSV-2 DNA PCR",
                    "Varicella-Zoster Virus (VZV) DNA PCR"
                ],
                specimenTypes: ["Cutaneous Lesion Swab"],
                urgency: "High",
                rationale: "Fluid-filled cutaneous or genital vesicles indicate immediate viral DNA PCR typing swab."
            },
            "syphilis sore": {
                requiredParameters: [
                    "Syphilis Treponema Antibody (TPHA / TP-PA)",
                    "Rapid Plasma Reagin (RPR) with Reflex Titer",
                    "HSV-1 / HSV-2 DNA PCR"
                ],
                specimenTypes: ["Venous Serum", "Lesion Swab"],
                urgency: "High",
                rationale: "Painless chancre ulceration requires non-treponemal (RPR) and treponemal antibody serology."
            },
            "herpes bump": {
                requiredParameters: [
                    "HSV-1 DNA PCR",
                    "HSV-2 DNA PCR"
                ],
                specimenTypes: ["Vesicle Swab / Lesion Swab"],
                urgency: "High",
                rationale: "Painful clustered bumps or open vesicular sores mandate HSV-1 and HSV-2 DNA PCR typing."
            },

            // --- SYSTEMIC & GENERAL SYMPTOMS ---
            "fever": {
                requiredParameters: [
                    "Complete Blood Count (CBC) with Differential",
                    "High-Sensitivity C-Reactive Protein (hs-CRP)",
                    "Erythrocyte Sedimentation Rate (ESR)",
                    "Comprehensive Metabolic Panel (CMP)"
                ],
                specimenTypes: ["Venous Whole Blood & Serum"],
                urgency: "High",
                rationale: "Elevated body temperature indicates checking total WBC, neutrophil/lymphocyte counts, and systemic inflammatory markers."
            },
            "fatigue": {
                requiredParameters: [
                    "Thyroid Stimulating Hormone (TSH)",
                    "Free T4 & Free T3",
                    "Fasting Blood Glucose",
                    "Serum Creatinine & BUN",
                    "CBC with Differential"
                ],
                specimenTypes: ["Venous Serum & Whole Blood"],
                urgency: "Low",
                rationale: "Chronic tiredness or low energy warrants endocrine thyroid screening, metabolic organ checkup, and anemia evaluation."
            }
        };
    }

    /**
     * Parses raw conversational customer messages and identifies matched symptoms,
     * required diagnostic parameters, analytes, specimen types, and triage urgency.
     * @param {string} userInput - The raw message sent by the customer in chat
     * @returns {object} Diagnostic parameters tailored for AI catalog matching
     */
    analyzeSymptoms(userInput) {
        if (!userInput || typeof userInput !== 'string') {
            return {
                matchedSymptoms: [],
                extractedParameters: [],
                requiredSpecimens: [],
                urgencyLevel: "Low",
                aiPromptContext: "No input provided."
            };
        }

        const normalizedInput = userInput.toLowerCase();
        const matchedSymptomsList = [];
        const parameterSet = new Set();
        const specimenSet = new Set();
        
        const urgencyOrder = { "Low": 1, "Medium": 2, "High": 3, "Urgent": 4 };
        let highestUrgency = "Low";

        // Scan symptomParameterMapping keys against user query
        for (const [symptomKey, data] of Object.entries(this.symptomParameterMapping)) {
            if (normalizedInput.includes(symptomKey)) {
                matchedSymptomsList.push({
                    symptomMatched: symptomKey,
                    urgency: data.urgency,
                    rationale: data.rationale
                });

                // Calculate max urgency
                if (urgencyOrder[data.urgency] > urgencyOrder[highestUrgency]) {
                    highestUrgency = data.urgency;
                }

                // Collect required parameters and specimens
                if (data.requiredParameters) {
                    data.requiredParameters.forEach(param => parameterSet.add(param));
                }
                if (data.specimenTypes) {
                    data.specimenTypes.forEach(spec => specimenSet.add(spec));
                }
            }
        }

        const extractedParametersArray = Array.from(parameterSet);
        const requiredSpecimensArray = Array.from(specimenSet);

        // Fallback default parameters if no specific symptom was matched
        if (extractedParametersArray.length === 0) {
            extractedParametersArray.push(
                "Complete Blood Count (CBC) with Differential",
                "Comprehensive Metabolic Panel (CMP)",
                "Urinalysis with Microscopic Examination"
            );
            requiredSpecimensArray.push("Venous Whole Blood & Serum", "Clean-Catch Urine");
        }

        // Build prompt context instructing the AI how to search and match user's custom lab catalog
        let promptContext = `[PATHOLOGY SYMPTOM-TO-TEST PARAMETER MATCHING CONTEXT]\n`;
        promptContext += `Customer Query: "${userInput}"\n`;
        promptContext += `Triage Urgency Level: ${highestUrgency}\n\n`;

        if (matchedSymptomsList.length > 0) {
            promptContext += `DETECTED SYMPTOMS / EXPOSURES:\n`;
            matchedSymptomsList.forEach(s => {
                promptContext += `- Symptom / Key Phrase: "${s.symptomMatched}" (Urgency: ${s.urgency})\n`;
                promptContext += `  Clinical Rationale: ${s.rationale}\n`;
            });
            promptContext += `\n`;
        }

        promptContext += `DIAGNOSTIC PARAMETERS & ANALYTES NEEDED:\n`;
        promptContext += `Search your laboratory test catalog for test panels that measure or include the following parameters:\n`;
        extractedParametersArray.forEach((param, idx) => {
            promptContext += `${idx + 1}. Parameter / Biomarker: ${param}\n`;
        });
        promptContext += `\n`;

        promptContext += `REQUIRED SPECIMEN TYPES:\n`;
        promptContext += `${requiredSpecimensArray.join(", ")}\n\n`;

        promptContext += `INSTRUCTIONS FOR YOUR AI CHATBOT:\n`;
        promptContext += `1. Match the parameters listed above against your inventory/catalog to select the best corresponding tests.\n`;
        promptContext += `2. DO NOT output dictionary definitions, etymologies, or word meanings.\n`;
        promptContext += `3. Address the customer empathetically, regardless of vulgar, informal, or slang language used.\n`;
        promptContext += `4. Recommend the matched tests from your catalog, explaining what specimen is required (${requiredSpecimensArray.join(", ")}) and WHY these parameters are clinically indicated based on their symptoms.\n`;
        promptContext += `5. Advise the customer on the urgency level (${highestUrgency}) and encourage consulting a qualified doctor.`;

        return {
            userInput,
            matchedSymptoms: matchedSymptomsList,
            extractedParameters: extractedParametersArray,
            requiredSpecimens: requiredSpecimensArray,
            urgencyLevel: highestUrgency,
            aiPromptContext: promptContext
        };
    }

    /**
     * Helper to retrieve clean prompt text directly for your AI API payload
     */
    generateAiPrompt(userInput) {
        const analysis = this.analyzeSymptoms(userInput);
        return analysis.aiPromptContext;
    }
}

// Universal Export Binding
if (typeof window !== 'undefined') {
    window.PathoLexiconEngine = PathoLexiconEngine;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PathoLexiconEngine;
}