$(function() {
    var medicalData = [{
        "Medical Concept": "Heart Attack",
        "Concept": " Alternative Medicines",
        "Term": " Meditation",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Symptoms",
        "Term": " Radiating Chest Pain",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Nutritional Supplements",
        "Term": " Coenzyme Q10",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Diagnostic Procedures",
        "Term": " Angioplasty",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Parent Terms",
        "Term": " Disorder of Heart Muscle",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Treatments",
        "Term": " Heart Bypass Surgery",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Children Terms",
        "Term": " Microinfarct of Heart",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Medications",
        "Term": " Atenolol",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Complications",
        "Term": " Congestive Heart Failure",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Risk Factors",
        "Term": " Tobacco Use",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Risk Factors",
        "Term": " High Cholesterol",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Preventions",
        "Term": " Blood Pressure Management",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Physician Specialist",
        "Term": " Cardiologist",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Synonyms",
        "Term": " Microinfarct of Heart",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Medical Name",
        "Term": " Myocardial Infarction",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Semantic Type",
        "Term": " Disease or Syndrome",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Heart Attack",
        "Concept": " Medical Codes",
        "Term": " ICD9: 410.9",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Alternative Medicines",
        "Term": " none",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Symptoms",
        "Term": " Cysts",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Nutritional Supplements",
        "Term": " Tea Tree Oil",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Diagnostic Procedures",
        "Term": " Physical Exam",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Parent Terms",
        "Term": " none",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Treatments",
        "Term": " Cyst Drainage",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Children Terms",
        "Term": " Tropical Acne",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Medications",
        "Term": " Benzoyl Peroxide",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Complications",
        "Term": " Social Problems",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Complications",
        "Term": " Scarring",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Risk Factors",
        "Term": " Hormonal Changes",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Preventions",
        "Term": " Good Skin Hygiene",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Physician Specialist",
        "Term": " Dermatologist",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Physician Specialist",
        "Term": " Internist",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Synonyms",
        "Term": " Pimples",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Medical Name",
        "Term": " Acne Vulgaris",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Semantic Type",
        "Term": " Disease",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Acne",
        "Concept": " Medical Codes",
        "Term": " ICD10: L70.9",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Alternative Medicines",
        "Term": " none",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Symptoms",
        "Term": " Blisters",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Symptoms",
        "Term": " Fever",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Nutritional Supplements",
        "Term": " None",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Diagnostic Procedures",
        "Term": " Antibody Test",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Parent Terms",
        "Term": " Infection",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Treatments",
        "Term": " Oatmeal Bath",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Children Terms",
        "Term": " Congenital Varicella Syndrome",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Medications",
        "Term": " Benadryl",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Complications",
        "Term": " Pneumonia",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Complications",
        "Term": " Skin Infections",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Risk Factors",
        "Term": " Contact with Infected Person",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Preventions",
        "Term": " Varicella Vaccine",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Physician Specialist",
        "Term": " Family Practice Physician",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Synonyms",
        "Term": " Chickenpox",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Medical Name",
        "Term": " Varicella",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Semantic Type",
        "Term": " Chicken Pox",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Chicken Pox",
        "Concept": " Medical Codes",
        "Term": " ICD10: B01.9",
        "Concept Type": "concept_attributes"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Alternative Medicines",
        "Term": " Acupuncture",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Symptoms",
        "Term": " Blurred Vision",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Symptoms",
        "Term": " Frequent Urination",
        "Concept Type": "concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Nutritional Supplements",
        "Term": " Alfalfa",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Diagnostic Procedures",
        "Term": " Hemoglobin A1C Measurement",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Parent Terms",
        "Term": " Diabetes",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Treatments",
        "Term": " Control Blood Sugar",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Children Terms",
        "Term": " Diabetes Mellitus with Gangrene",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Medications",
        "Term": " Metformin",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Complications",
        "Term": " Peripheral Vascular Disease",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Risk Factors",
        "Term": " Family History",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Preventions",
        "Term": " Regular Exercise",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Preventions",
        "Term": " Maintain Healthy Weight",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Physician Specialist",
        "Term": " Endocrinologist",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Synonyms",
        "Term": " Adult Onset Diabetes",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Medical Name",
        "Term": " Diabetes Mellitus",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Semantic Type",
        "Term": " Chicken Pox",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Diabetes Type II",
        "Concept": " Medical Codes",
        "Term": " ICD10: E11.9",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Alternative Medicines",
        "Term": " Hydrotherapy",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Symptoms",
        "Term": " Limited Range of Motion",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Symptoms",
        "Term": " Chronic Join Pain",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Nutritional Supplements",
        "Term": " Glucosamine",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Diagnostic Procedures",
        "Term": " Joint X-Ray",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Parent Terms",
        "Term": " none",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Treatments",
        "Term": " Control Blood Sugar",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Children Terms",
        "Term": " Osteoarthritis Ankle",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Medications",
        "Term": " Metformin",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Complications",
        "Term": " Peripheral Vascular Disease",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Risk Factors",
        "Term": " Family History",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Preventions",
        "Term": " Regular Exercise",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Preventions",
        "Term": " Maintain Healthy Weight",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Physician Specialist",
        "Term": " Endocrinologist",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Synonyms",
        "Term": " Degenerative Joint Disease",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Medical Name",
        "Term": " Osteoarthritis",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Semantic Type",
        "Term": " none",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Osteoarthritis",
        "Concept": " Medical Codes",
        "Term": " ICD10: M19.90",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Alternative Medicines",
        "Term": " none",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Symptoms",
        "Term": " Abnormal Hearth Rhythm",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Symptoms",
        "Term": " Paralysis",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Nutritional Supplements",
        "Term": " Folic Acid",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Diagnostic Procedures",
        "Term": " Angiography",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Parent Terms",
        "Term": " none",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Treatements",
        "Term": " Angioplasty",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Children Terms",
        "Term": " none",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Medications",
        "Term": " Heparin",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Complications",
        "Term": " Deep Vein Thrombosis",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Risk Factors",
        "Term": " Family History",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Preventions",
        "Term": " Limit Alcohol Use",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Preventions",
        "Term": " Smoking Cessation",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Physician Specialist",
        "Term": " Neurologist",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Synonyms",
        "Term": " Brain Attack",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Medical Name",
        "Term": " Cerbrovascular Accident",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Semantic Type",
        "Term": " none",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Stroke",
        "Concept": " Medical Codes",
        "Term": " ICD10: 167.2",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Alternative Medicines",
        "Term": " Acupuncture",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Symptoms",
        "Term": " Labored Breathing",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Symptoms",
        "Term": " Wheezing",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Nutritional Supplements",
        "Term": " Eucalyptus Oil",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Diagnostic Procedures",
        "Term": " Chest X-Ray",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Diagnostic Procedures",
        "Term": " Lung Function Test",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Parent Terms",
        "Term": " Disorders of Respiratory System",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Treatments",
        "Term": " Nebulizer Therapy",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Children Terms",
        "Term": " Acute Asthma",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Medications",
        "Term": " Albuterol",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Complications",
        "Term": " Deep Vein Thrombosis",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Risk Factors",
        "Term": " Exposure to 2nd Hand Smoke",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Preventions",
        "Term": " Avoid Known Allergies",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Preventions",
        "Term": " Smoking Cessation",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Physician Specialist",
        "Term": " Pulmonologist",
        "Concept Type": " concept_relationships"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Synonyms",
        "Term": " Brain Attack",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Medical Name",
        "Term": " Asthma",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Semantic Type",
        "Term": " none",
        "Concept Type": " concept_attributes"
    }, {
        "Medical Concept": "Asthma",
        "Concept": " Medical Codes",
        "Term": " ICD10: J45.909",
        "Concept Type": " concept_attributes"
    }];

    var theTemplateScript = $("#medicalConcepts").html();

    var theTemplate = Handlebars.compile(theTemplateScript);
    $(".concept").append(theTemplate(medicalData));
});