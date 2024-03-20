from enum import Enum

class FunctionType(Enum):
    MICHAELIS_MENTEN = 1
    UPTAKE_RATE = 2

def michaelis_menten(S, Vmax, Km):
    return Vmax * S / (Km + S)

def uptake_rate(S, Pt, Ac, Vmax, Km):
    return Pt * Ac * Vmax * (S / (Km + S))

FUNCTION_MAP = {
    FunctionType.MICHAELIS_MENTEN: michaelis_menten,
    FunctionType.UPTAKE_RATE: uptake_rate
}