export interface User {
    data: {
        id: string;
        firstName: string | null;
        lastName: string | null;
        username: string;
        email: string;
        password: string;
        image: string | null;
        createdOn: string;
        createdBy: string | null;
        changedOn: string;
        changedBy: string | null;
        status: number;
        otp: string;
        role: string | null;
        loginType: number;
        headLine: string | null;
        summary: string | null;
        organizationId: string | null;
        isEmailVerified: boolean;
    }
}