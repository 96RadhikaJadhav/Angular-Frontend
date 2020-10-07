export class AppConstants {

    // ================================================
    // User related constants
    // ================================================

    // Different types of memberships a user can have
    public static memberMembership = "Member";
    public static alumniMembership = "Alumni";
    public static associateMemberMembership = "Associate member";
    public static typesOfMemberships = [AppConstants.memberMembership,
        AppConstants.alumniMembership, AppConstants.associateMemberMembership];

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
