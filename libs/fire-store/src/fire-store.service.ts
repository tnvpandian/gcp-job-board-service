import { Injectable } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import { Logger } from 'nestjs-pino';

@Injectable()
export class FireStoreService {
  constructor(
    private readonly firestore: Firestore,
    private readonly logger: Logger,
  ) {}

  async createDocument(collectionName: string, data: any): Promise<any> {
    const collectionRef = this.firestore.collection(collectionName);
    const docRef = await collectionRef.add(data);
    return docRef?.id;
  }

  async deleteDocument(collectionName: string, docId: string): Promise<any> {
    const docRef = this.firestore.collection(collectionName).doc(docId);
    let deletedDocument;

    try {
      const doc = await docRef.get();
      if (!doc.exists) {
        throw new Error(
          `Document with ID ${docId} does not exist in collection ${collectionName}`,
        );
      }

      deletedDocument = await docRef.delete();
      this.logger.log(`Document with ID ${docId} deleted successfully`);
    } catch (error) {
      this.logger.error('Error deleting document:', error.message);
      return { error: error.message };
    }
    return { doc_id: docId, ...deletedDocument };
  }

  async getDocuments(collectionName: string): Promise<any[]> {
    const collectionRef = this.firestore.collection(collectionName);
    const snapshot = await collectionRef.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async getDocument(collectionName: string, docId: string): Promise<any> {
    const collectionRef = this.firestore.collection(collectionName).doc(docId);
    const docRef = await collectionRef.get();
    if (!docRef.exists) {
      return { error: `Document with ID ${docId} not found` };
    }
    return { id: docRef.id, ...docRef.data() };
  }
}
