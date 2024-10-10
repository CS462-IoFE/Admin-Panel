import dayjs from "dayjs";

const timeParser = (timeString: string) => {
    const currentDate = dayjs().format("YYYY-MM-DD");
    const dateTimeString = `${currentDate} ${timeString}`;

    const parsedTime = dayjs(dateTimeString, "YYYY-MM-DD HHmm");
    return parsedTime.format("h:mmA");
};

export default timeParser;
