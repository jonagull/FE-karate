export const formatDate = (input: Date | string) => {
    return new Date(input).toLocaleDateString("en-GB");
};
