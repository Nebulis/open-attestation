// types generated by quicktype during postinstall phase
import { OpenAttestationDocument as OpenAttestationDocumentV3 } from "../__generated__/schema.3.0";
import { SchemaId, SignatureAlgorithm, ProofPurpose } from "../shared/@types/document";

export interface Salt {
  value: string;
  path: string;
}

export interface VerifiableCredentialProofBase {
  type: SignatureAlgorithm;
  targetHash: string;
  merkleRoot: string;
  proofs: string[];
  salts: string;
  privacy: { obfuscated: string[] };
  proofPurpose: ProofPurpose.AssertionMethod;
}

export interface VerifiableCredentialProofSigned extends VerifiableCredentialProofBase {
  key: string;
  signature: string;
}

// TODO rename to something else that is not proof to allow for did-signed documents
// Also it makes sense to use `proof` to denote a document that has been issued
export type WrappedDocument<T extends OpenAttestationDocumentV3 = OpenAttestationDocumentV3> = T & {
  version: SchemaId.v3;
  schema?: string;
  proof: VerifiableCredentialProofBase | VerifiableCredentialProofSigned;
};
