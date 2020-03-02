class Transcriptor {
  static sequenceMap = new Map([
    ["C", "G"],
    ["G", "C"],
    ["T", "A"],
    ["A", "U"]
  ]);

  toRna(strand: string): string {
    return strand.split("").reduce((acc, curr) => {
      if (!Transcriptor.sequenceMap.has(curr))
        throw new Error("Invalid input DNA.");
      acc += Transcriptor.sequenceMap.get(curr) || "";
      return acc;
    }, "");
  }
}

export default Transcriptor;
