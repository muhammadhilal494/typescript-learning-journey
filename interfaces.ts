interface User {
    readonly dbId: number;
    email: string;
    id: number;
    googleId?: string; // optional property
    // startTrial: () => string; // method
    startTrial(): string; // method
    getCoupon(couponName: string, val: number): number; // method with parameters
}

interface User {
    gitHubToken?: string; // optional property

}

interface Admin extends User {
    role: "admin" | "superadmin"; // union type for role
}

const hilal: Admin = {
    dbId: 22,
    gitHubToken: "github123",
    role: "admin",
    email: "h@h.com",
    id: 1,
    startTrial: () => {
        // return 3
        return "trial started"
    },
    getCoupon: (name: "coupon1", off: 10) => {
        return 10;
    }

}

hilal.email = "hilal@google.com"
// hilal.dbId = 33; // error, dbId is readonly
