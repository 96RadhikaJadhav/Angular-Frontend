export class AppConstants {

    // ================================================
    // User related constants
    // ================================================

    // Different types of memberships a user can have
    public static typesOfMemberships = ["Member", "Alumni", "Associate member"];

    // ================================================
    // Company opportunity related constants
    // ================================================

    // Current sponsors for which opportunities are enabled linked to their pictures
    public static companyOpportunityCompanies = new Map([
        ["Optiver", "./assets/img/partners/optiver.png"],
    ]);

    // Different types of opportunities that are enabled for the website
    public static companyOpportunityCategories = ["internship", "vacancy"];
}
