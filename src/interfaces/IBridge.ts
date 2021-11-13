interface IBridge {
    send(port: number): Promise<void>
}

export { IBridge }