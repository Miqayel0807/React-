export default function DateFormatter(date) {
    return new Date(date).toISOString().slice(0, 10);
}