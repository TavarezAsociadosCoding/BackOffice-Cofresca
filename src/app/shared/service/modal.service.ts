import { Injectable } from "@angular/core";
import { ModalConfig } from "src/app/core/interceptors/modal.model";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  constructor() {}

  /**
   * @param config
   * @param confirmFunc
   * @description
   * This function creates a modal with the given config and calls the confirmFunc when the user clicks the confirm button
   * @returns {void}
   */
  public async createRegisterModal(
    config: ModalConfig,
    confirmFunc: () => void
  ): Promise<void> {
    const { title, text, confirmButtonText, cancelButtonText } = config;
    const { isConfirmed } = await Swal.fire({
      title,
      text,
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
      showCloseButton: true,
      imageUrl: "../../../assets/images/modalLogo.png",
      imageHeight: 65,
    });
    if (isConfirmed) {
      await confirmFunc();
    }
  }

  public async createRegisterModalWithReject(
    config: ModalConfig,
    confirmFunc: () => void,
    negativeFunc: () => void
  ): Promise<void> {
    const { title, text, confirmButtonText, cancelButtonText } = config;
    const { isConfirmed } = await Swal.fire({
      title,
      text,
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
      showCloseButton: true,
      imageUrl: "../../../assets/images/modalLogo.png",
      imageHeight: 65,
    });
    if (isConfirmed) {
      await confirmFunc();
    } else {
      await negativeFunc();
    }
  }

  public async confirmationModal(
    config: ModalConfig,
    confirmFunc: () => void
  ): Promise<void> {
    const { title, text, confirmButtonText, cancelButtonText } = config;
    const { isConfirmed } = await Swal.fire({
      title,
      text,
      icon: "question",
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
      showCloseButton: true,
      imageHeight: 65,
    });
    if (isConfirmed) {
      await confirmFunc();
    }
  }
}
