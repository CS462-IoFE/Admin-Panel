import dayjs from "dayjs";

const getPastSixMonths = () => {
    const months = [];

    for (let i = 1; i <= 6; i++) {
        const pastMonth = dayjs().subtract(i, "month").format("MMM YY");
        months.push(pastMonth);
    }

    return months.reverse();
};

export default getPastSixMonths;
