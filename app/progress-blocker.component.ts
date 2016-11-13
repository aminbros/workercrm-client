import { Component, ViewChild } from '@angular/core'

@Component({
  selector: 'progress-blocker',
  template: `
    <div class="pb-blocker" [style.display]="blocking ? 'block' : 'none'" [class.active]="blocking">
      <div class="pb-view">
        <div class="pb-icon-container">
          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
        <div class="pb-message">
          {{ message }}
        </div>
      </div>
    </div>
  `,
})
export class ProgressBlockerComponent {
  public message: string
  private blocking: boolean = false
  public isBlocking() {
    return this.blocking
  }
  public block() {
    this.blocking = true
  }
  public unblock() {
    this.blocking = false
  }
}
