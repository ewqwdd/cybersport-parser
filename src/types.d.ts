
type AllRequired<T> = {
    [K in keyof T]-?: T[K]
}