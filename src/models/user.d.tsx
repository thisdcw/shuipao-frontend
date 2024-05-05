/**
 * 用户类别
 */
export type UserType = {
    id: string;
    username?: string;
    userAccount: string;
    avatarUrl?: string;
    gender: number;
    phoneNumber: number;
    email: number;
    profile?: string;
    userStatus: number;
    createTime: Date;
    inviteCode: string;
    userRole: number;
    tags: []
};