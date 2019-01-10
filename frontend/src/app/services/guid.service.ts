export class GUIDService {

  // no one should call this
  protected constructor() {}

  /**
  * Gets a randomly generated 16 alpha-numeric ID - used for UI generated
  * transaction IDs
  *
  * @returns a string representing a randomly generated Guid
  */
  public static getID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
    });
  }
}
