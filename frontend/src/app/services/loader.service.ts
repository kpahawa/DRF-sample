import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  private isLoading = false;
  private spinner = document.getElementById("propLoader");
  private HIDE = "hide";
  private SHOW = "show";
  private static loaderService: LoaderService;

  // protected to make sure no one calls it.
  protected constructor() {}

  /**
  * Publicly callable method to display the spinner.
  */
  public showSpinner() {
    this.isLoading = true;
    this.setSpinner();
  }

  /**
  * Sets the spinner's visibility based on the method chosen.
  */
  private setSpinner() {
    if (this.isLoading) {
     this.spinner.style.display = "block";
    } else {
      this.spinner.style.display = "none";
    }
  }

  /**
  * Publicly callable method to remove the spinner from the UI
  */
  public removeSpinner() {
    this.isLoading = false;
    this.setSpinner();
  }

  /**
  * Class which ensures that only one instance of this loader service is used across all components
  * in the application. Note that the constructor is protected which means that no other class can
  * call it.
  */
  public static getInstance(): LoaderService {
    if (this.loaderService == null || this.loaderService == undefined) {
      this.loaderService = new LoaderService();
    }

    return this.loaderService;
  }

}
