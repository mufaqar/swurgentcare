import * as Yup from 'yup';


export const signUpschema = Yup.object({
    oppintment_date: Yup.string().required("Please select field"),
    name: Yup.string().required("Please select field"),
    email: Yup.string().email().required("Please select field"),
    birth_date: Yup.string().required("Please select field"),
    age: Yup.string().required("Please select field"),
    address: Yup.string().required("Please select field"),
    city: Yup.string().required("Please select field"),
    state: Yup.string().required("Please select field"),
    zipcode: Yup.string().required("Please select field"),
    gender: Yup.string().required("Please select field"),
    maritual_status: Yup.string().required("Please select field"),
    race: Yup.string().required("Please select field"),
    occupation: Yup.string().required("Please select field"),
    phone: Yup.string().required("Please select field"),
    home_phone: Yup.string().required("Please select field"),
    dl: Yup.string().required("Please select field"),
    ssn: Yup.string().required("Please select field"),
    medications: Yup.string().required("Please select field"),
    surgery: Yup.string().required("Please select field"),
    surgery_explain: Yup.string().required("Please select field"),
    allergy: Yup.string().required("Please select field"),
    allergy_explain: Yup.string().required("Please select field"),
    mediProblem: Yup.string().required("Please select field"),
    mediProblem_explain: Yup.string().required("Please select field"),
    smoking: Yup.string().required("Please select field"),
    smoking_explain: Yup.string().required("Please select field"),
    tabacco: Yup.string().required("Please select field"),
    tabacco_explain: Yup.string().required("Please select field"),
    drink: Yup.string().required("Please select field"),
    drink_explain: Yup.string().required("Please select field"),
    drugs: Yup.string().required("Please select field"),
    drugs_explain: Yup.string().required("Please select field"),
    pharmacy_name: Yup.string().required("Please select field"),
    pharmacy_phone: Yup.string().required("Please select field"),
    pharmacy_address: Yup.string().required("Please select field"),
    visit_for: Yup.string().required("Please select field"),
    rfirst_name: Yup.string().required("Please select field"),
    rlast_name: Yup.string().required("Please select field"),
    rphone: Yup.string().required("Please select field"),
    rname: Yup.string().required("Please select field"),
    relation: Yup.string().required("Please select field"),
    rphone2: Yup.string().required("Please select field"),
    about_us: Yup.string().required("Please select field"),
})