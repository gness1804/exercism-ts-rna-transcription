class Transcriptor {
  static sequenceMap = new Map([
    ["C", "G"],
    ["G", "C"],
    ["T", "A"],
    ["A", "U"]
  ]);

  toRna(nucleotide: string): string {
    if (!Transcriptor.sequenceMap.has(nucleotide))
      throw new Error("Invalid input DNA.");
    return Transcriptor.sequenceMap.get(nucleotide) || "";
  }
}

export default Transcriptor;
